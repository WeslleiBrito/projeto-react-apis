import styled from "styled-components";
import pokeball from "../../assets/img/backgrounds/pokeball.svg"

export const ItemPokemon = styled.li`
    flex-basis: calc(33.33% - 1vw);
    height: 35vh;
    width: 20vw;
    background: url(${pokeball}) no-repeat, ${(props) => props.bgColor};
    background-size: 40vh;
    background-position: 120% 150%;
    margin: 1vh;
    border-radius: 1em;
`

export const IdPokemon = styled.h2`
    font-size: 1rem
`

export const NamePokemon = styled.h1`
`

export const ImagePokemon = styled.img`

    height: 12vh;
    width: 15vh;
    
`

export const ListTypes = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const TypeIcon = styled.img`
    width: 2vw;
    height: 2vw;
`

export const ItemType = styled.li`
    height: 6.5vh;
    width: 7vw;
    display: flex;
    background-color: ${props => props.colorType};
    border: 2px dashed;
    border-radius: 0.5em;
`

export const NameType = styled.p``


export const Details = styled.a`
`

export const ButtonCapture = styled.button`
`


