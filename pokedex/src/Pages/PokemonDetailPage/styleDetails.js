import styled from "styled-components"
import { Progress } from "@chakra-ui/react"


export const DetailsContainer = styled.main`
    
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
`

export const Title = styled.h3`
`

export const ListBaseStats = styled.ul`
`

export const ItemBaseStats = styled.li`
  width: 30vw;
  display: flex;
  justify-content: space-around;
  background-color: rebeccapurple;

`

export const LableBaseStats = styled.p`
  width: 8vw;
`

export const ValueBaseStats = styled.p`

`

export const AmountBaseStats = styled.p`
`

export const SectionMoves = styled.section`
`

export const ListMoves = styled.ul`
`

export const ItemMoves = styled.li`
`

export const ProgressBaseStats = ({ value, gradient }) => {

  return (<Progress margin={'2'}
    value={value} borderRadius={'0.2em'}
    size={'md'}
    maxW={"15vw"}
    sx={{
      "& > div": {
        background: `linear-gradient(to right, ${gradient})`,
      },
    }}
    style={{ width: "100%" }}
  />)
}