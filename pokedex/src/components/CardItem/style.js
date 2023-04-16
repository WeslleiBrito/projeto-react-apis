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
`

export const ItemType = styled.li`
    background-image: url(${props => props.path});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    height: 6vh;
    width: 6vw;
   background-color: ${props => props.colorType}
`

export const Details = styled.a`
`

export const ButtonCapture = styled.button`
`


