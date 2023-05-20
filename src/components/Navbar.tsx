import React from 'react';
import {HStack, Image, Text} from "@chakra-ui/react";
import logo from '../assets/react.svg'

function Navbar() {
    return (
        <HStack>
            <Image src={logo} boxSize="100px"></Image>
            <Text>Navbar</Text>
        </HStack>
    );
}

export default Navbar;