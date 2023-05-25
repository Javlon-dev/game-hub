import React from 'react';
import {HStack, Image} from "@chakra-ui/react";
import logo from '../assets/react.svg'
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

function Navbar() {
    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize="100px"/>
            <SearchInput/>
            <ColorModeSwitch/>
        </HStack>
    );
}

export default Navbar;