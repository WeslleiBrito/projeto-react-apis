import styled from "styled-components";
import pokeball from "../../assets/img/backgrounds/pokeball.svg"
import { Heading } from "@chakra-ui/react";

export const ItemPokemon = styled.li`
    display: flex;
    flex-direction: column;
    position: relative;
    height: 30vh;
    width: 30vw;
    background: url(${pokeball}) no-repeat, ${(props) => props.bgColor};
    background-size: 37vh;
    background-position-x: 14.8vw;
    background-position-y: -3.5vw;
    border-radius: 1em;
    padding: 2vh;
`

export const IdPokemon = ({ text }) => {

    return <Heading as={"h2"} fontSize={"1rem"} color={"#ffff"} fontWeight={"700"}>{text}</Heading>
}


export const NamePokemon = styled.h1`
`

export const ImagePokemon = styled.img`
    position: absolute;
    height: 25vh;
    width: 25vh;
    top: -23%;
    left: 58%;
`

export const ListTypes = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 11vw;
`

export const TypeIcon = styled.img`
    width: 1vw;
    height: 1vw;
`

export const ItemType = styled.li`
    height: 4vh;
    width: 5vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: ${props => props.colorType};
    border: 1px dashed #ffff;
    border-radius: 0.5em;
`

export const NameType = styled.p`
    font-size: 0.8em;
`


export const Details = styled.a`
`

export const ButtonCapture = styled.button`
`


