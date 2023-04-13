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

export const IdPokemon = styled.p`
`

export const Name = styled.p`
`

const styleImage = styled.img`
`
export const ImagePokemon = (props) => {
    const {src, alt} = props

    return <styleImage src={src} alt={alt}/>
}

export const ListTypes = styled.ul`
    display: flex;
    flex-direction: row-reverse;
`

export const ItemType = styled.li`
    background-image: url(${props => props.path});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 50% 50%;
    height: 10vh;
    width: 7vw;
    background-color: black;
`

const styleButtonDetails = styled.button`
`

export const ButtonDetails = (props) => {

    const { id } = props

    return <styleButtonDetails id={id}/>
}


const styleButtonCapture = styled.button`
`

export const ButtonCapture = (props) => {
    const { id } = props

    return <styleButtonCapture id={id}/>
}

