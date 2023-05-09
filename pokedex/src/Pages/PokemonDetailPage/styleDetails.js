import styled from "styled-components"
import { Heading } from "@chakra-ui/react"
import pokeball from "../../assets/img/backgrounds/pokeball.svg"

export const DetailsContainer = styled.main`
    background-color: #666666;
    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

export const Title = ({ title, color }) => {

  return <Heading as="h2" color={color} style={{ display: "flex", alignSelf: "flex-start" }}>{title}</Heading>
}

export const CardDetalis = styled.section`
  display: grid;
  grid-template-columns: 15vw 1fr 2fr; 
  grid-template-rows: 1fr 3fr;
  width: 98%;
  height: 65vh;
  padding-top: 1vh;
  padding-bottom: 1vh;
  padding-left: 4vh;
  background: url(${pokeball}) no-repeat ${(props) => props.color};
  background-size: 82vh;
  background-position: 109%;
  position: relative;
  align-self: center;
  align-items: center;
`
export const ListSecondImages = styled.ul`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  height: 59vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 5vh;
`
export const ItemSecondImage = styled.li`
  width: 30vh;
  height: 30vh;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SecondImage = styled.img`
  width: 70%;
  
`
export const SectionBaseStats = styled.section`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  background: #FFFFFF;
  height: 59vh;
  margin-left: 2vw;
  padding: 2vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`


export const ListBaseStats = styled.ul`
  width: 20vw;
`

export const ItemBaseStats = styled.li`
  width: 20vw;
  display: flex;
  align-items: center;
  height: 5vh;
  border-top: 1px solid #9EA3A3;

`

export const LableBaseStats = styled.p`
  width: 6vw;
  text-align: end;
  font-size: 0.75em;
`

export const ValueBaseStats = styled.p`
  text-align: end;
  width: 5vw;
  font-size: 0.75em;
`

export const Description = styled.section`
`

export const SectionMoves = styled.section`
  background: #FFFFFF;

`
export const ListMoves = styled.ul`
`

export const ItemMoves = styled.li`
`

export const ImagePokemon = styled.img`
  position: absolute;
  height: 25vh;
  width: 25vh;
  right: 2%;
  top: -19%;
`


