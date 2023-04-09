import styled from "styled-components";

export const ItemPokemon = styled.li`
    height: 25vh;
    width: 30vw;
    background-color: ${(props) => props.bgColor};
    margin-bottom: 1vh;
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

