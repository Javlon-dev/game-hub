import React, {useEffect, useState} from 'react';
import apiClient from "../service/api-client";
import {Text} from "@chakra-ui/react";

interface Game {
    id: number
    name: string
}

interface FetchGamesResponse {
    count: number
    results: Game[]
}

function GameGrid() {
    const [games, setGames] = useState<Game[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>('/games')
            .then(response => setGames(response.data.results))
            .catch(reason => setError(reason.message))
    })

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(value => <li key={value.id}>{value.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid;