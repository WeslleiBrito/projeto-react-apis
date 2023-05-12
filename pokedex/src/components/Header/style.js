import styled from "styled-components";
import { Button } from "@chakra-ui/react";

export const HeaderContainer = styled.header`
    height: 17vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
`

export const LogoPokedex = styled.img`
    height: 13vh;
    grid-column: 2 / 3;
`
export const TextAllPokemons = styled.h3`
    
`

export const ButtonPokeball = styled.button`
    
`

export const ButtonDelete = styled.button`
    
`
export const ButtonAddPokelist = styled.button`
`

export const ButtonPokedex = ({ text, goPokedex, navigate }) => {


    return <Button bg={"#33A4F5"} height={"7vh"} justifySelf={"end"} width={"10vw"} marginRight={"1.5vw"} onClick={() => { goPokedex(navigate) }}>{text}</Button>
}

