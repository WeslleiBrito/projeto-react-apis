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
    font-size: 1rem;
    color: #ffff;
    font-weight: 700;
`

export const NamePokemon = styled.h1`
`

export const ImagePokemon = styled.img`

    height: 12vh;
    width: 15vh;
    
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


