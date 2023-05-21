import React from 'react';
import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/react.svg'
import ColorModeSwitch from "./ColorModeSwitch";

function Navbar() {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize="100px"></Image>
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
}

export default Navbar;