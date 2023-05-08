import styled from "styled-components"
import { Progress, Heading } from "@chakra-ui/react"
import pokeball from "../../assets/img/backgrounds/pokeball.svg"

export const DetailsContainer = styled.main`
    
`
export const ImagePokemon = styled.img`
  position: absolute;
  width: 25vh;
  height: 25vh;
`
export const Text = styled.h1`
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

`

export const Title = ({ title }) => {

  return <Heading as="h2">{title}</Heading>
}

export const ListSecondImages = styled.ul`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
`
export const ItemSecondImage = styled.li`
  
`
export const SecondImage = styled.img`
  
`
export const ListBaseStats = styled.ul`
`

export const ItemBaseStats = styled.li`
  width: 35vw;
  display: flex;
  align-items: center;
  height: 5vh;
  border-top: 1px solid #9EA3A3;

`

export const LableBaseStats = styled.p`
  width: 8vw;
  text-align: end;
`

export const ValueBaseStats = styled.p`
  text-align: end;
  width: 5vw;
`

export const Infos = styled.article`
  
`
export const AmountBaseStats = styled.p`
`

export const SectionMoves = styled.section`
`

export const ListMoves = styled.ul`
`

export const ItemMoves = styled.li`
`
export const CardDetalis = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr; 
  grid-template-rows: 1fr 3fr;
  width: 98%;
  background: url(${pokeball}) no-repeat ${(props) => props.color};
  background-size: 60vh;
  background-position: center right;
  position: relative;
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

