import {useEffect, useState} from 'react';
import apiClient from "../service/api-client";
import {Simulate} from "react-dom/test-utils";
import {CanceledError} from "axios";


export interface Game {
    id: number
    name: string
    background_image: string
}

interface FetchGamesResponse {
    count: number
    results: Game[]
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        apiClient
            .get<FetchGamesResponse>('/games', {signal: controller.signal})
            .then((response) => setGames(response.data.results))
            .catch((reason) => {
                if (reason instanceof CanceledError) return
                setError(reason.message)
            })

        return () => controller.abort()
    }, [])

    return {games, error}
}

export default useGames