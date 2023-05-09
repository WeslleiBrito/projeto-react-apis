import styled from "styled-components"
import { Progress, Heading } from "@chakra-ui/react"
import pokeball from "../../assets/img/backgrounds/pokeball.svg"

export const DetailsContainer = styled.main`
    background-color: #666666;
    height: 88vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`
export const ImagePokemon = styled.img`
  position: absolute;
  height: 25vh;
  width: 25vh;
  right: 2%;
  top: -19%;
`

export const SectionDetails = styled.section`
`

export const SectionImage = styled.image`
`

export const ImageSecond = styled.img`
`

export const SectionBaseStats = styled.section`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  background: #FFFFFF;
  height: 92.45%;
  width: 30vw;

`

export const Title = ({ title, color }) => {

  return <Heading as="h2" color={color}>{title}</Heading>
}

export const ListSecondImages = styled.ul`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  height: 92.45%;
  width: 13vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ItemSecondImage = styled.li`
  width: 100%;
  height: 45%;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const SecondImage = styled.img`
  width: 70%;
  
`
export const ListBaseStats = styled.ul`
  width: 30vw;
  padding-left: 0.5vw;
`

export const ItemBaseStats = styled.li`
  width: 29vw;
  display: flex;
  align-items: center;
  height: 5vh;
  border-top: 1px solid #9EA3A3;

`

export const LableBaseStats = styled.p`
  width: 5vw;
  text-align: end;
  font-size: 0.75em;
`

export const ValueBaseStats = styled.p`
  text-align: end;
  width: 3vw;
  font-size: 0.75em;
`

export const Infos = styled.article`
  
`
export const AmountBaseStats = styled.p`
`

export const SectionMoves = styled.section`
  background: #FFFFFF;

`

export const ListMoves = styled.ul`
`

export const ItemMoves = styled.li`
`
export const CardDetalis = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr; 
  grid-template-rows: 1fr 3fr;
  column-gap: 2vw;
  width: 98%;
  height: 65vh;
  padding-top: 2vh;
  padding-bottom: 2vh;
  padding-left: 4vh;
  background: url(${pokeball}) no-repeat ${(props) => props.color};
  background-size: 82vh;
  background-position: 109%;
  position: relative;
  align-self: center;
`


export const ProgressBaseStats = ({ value, gradient }) => {

  return (<Progress margin={'2'}
    value={value} borderRadius={'0.2em'}
    size={'md'}
    maxW={"15vw"}
    width={"20vw"}
    marginLeft={"2vw"}
    sx={{
      "& > div": {
        background: `linear-gradient(to right, ${gradient})`,
      },
    }}
    style={{ width: "100%", marginLeft: "2vh" }}
  />)
}

