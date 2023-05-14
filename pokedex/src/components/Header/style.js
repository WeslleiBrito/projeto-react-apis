import styled from "styled-components";
import { Button, Text } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons"

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
    justify-self: center;
`
export const TextAllPokemons = styled.h3`
    
`
export const ButtonReturnPage = ({actionFunction, navigate}) => {

    return(
        <Button onClick={() => actionFunction(navigate)}  _hover={{}} _active={{}} w={"18vw"} bg={"transparent"}>
            <ChevronLeftIcon w={10} h={10} mt={'1'} />
            <Text fontSize={"1.5rem"}  fontWeight={"700"} display={"flex"} alignItems={"center"} textDecoration={"underline"}>Todos Pokémons</Text>
        </Button>
    )
}
export const ButtonPokeball = styled.button`
    
`

export const AddToPokelistBotton = ({addToPokeList, id, changeIdInPokelist}) => {
    return(
        <Button
            onClick={() => {addToPokeList(id); changeIdInPokelist()}}
            _active={{}}
            _hover={{}}
            color={"#ffff"}
            bg={"#3e56ae"}
            inlineSize={"max-content"}
            fontWeight={"400"}
            h={"6vh"}
            fontSize={"0.7em"}
            justifySelf={"end"}
            marginRight={"2vw"}
        >
            Capturar Pokémon
        </Button>
    )
}

export const RemoveToPokelistBotton = ({removeToPokelist, id, changeIdInPokelist}) => {
    return(
        <Button
            onClick={() => {removeToPokelist(id); changeIdInPokelist()}}
            _active={{}}
            _hover={{}}
            color={"#ffff"}
            bg={"#FF6262"}
            inlineSize={"max-content"}
            fontWeight={"400"}
            h={"6vh"}
            fontSize={"0.7em"}
            justifySelf={"end"}
            marginRight={"2vw"}
        >
            Excluir da Pokédex
        </Button>
    )
}

export const ButtonPokedex = ({ text, goPokedex, navigate }) => {
    return <Button bg={"#33A4F5"} height={"7vh"} justifySelf={"end"} width={"10vw"} marginRight={"1.5vw"} onClick={() => { goPokedex(navigate) }}>{text}</Button>
}

