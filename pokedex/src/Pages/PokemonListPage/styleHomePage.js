import styled from "styled-components";
import { Heading } from "@chakra-ui/react"

export const Main = styled.main`
    height: 320vh;
    width: 99vw;
    display: flex;
    flex-direction: column;
    background-color: #5D5D5D;
    padding: 2vh;
   
`

export const Title = ({ text }) => {
    return <Heading as={"h2"} fontSize={"2rem"} color={"#ffff"}>{text}</Heading>
}


export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(7, 1fr);
    row-gap: 8vh;
    margin-top: 10vh;
    width: 90%;
    column-gap: 2vw;
`