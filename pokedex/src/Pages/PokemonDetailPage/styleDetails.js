import styled from "styled-components"
import pokeball from "../../assets/img/backgrounds/pokeball.svg"


export const DetailsContainer = styled.main`
    background-color: #666666;
    height: 120vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1vw;
    
`


export const CardDetalis = styled.section`
  display: grid;
  grid-template-columns: 20vw 1fr 2fr; 
  grid-template-rows: 1fr 3fr;
  height: 88vh;
  padding-top: 4vh;
  padding-bottom: 4vh;
  padding-left: 4vh;
  background-color:  ${(props) => props.color};
  background-image: url(${pokeball});
  background-repeat: no-repeat;
  background-position: right;
  background-position-x: 119%;
  background-size: 58.5%;
  position: relative;
  align-self: center;
  border-radius: 2em;
`
export const ListSecondImages = styled.ul`
  grid-row: 1 / 3;
  grid-column: 1 / 2;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 5vh;
`
export const ItemSecondImage = styled.li`
  width: 40vh;
  height: 40vh;
  background: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1em;
`
export const SecondImage = styled.img`
  width: 70%;
  
`
export const SectionBaseStats = styled.section`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  background: #FFFFFF;
  height: 80vh;
  width: 28vw;
  margin-left: 2vw;
  padding: 2vh;
  padding-top: 3.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5.1vw;
  border-radius: 1em;
`


export const ListBaseStats = styled.ul`
  width: 26vw;
  display: flex;
  flex-direction: column;

`

export const ItemBaseStats = styled.li`
  display: flex;
  align-items: center;
  height: 5vh;
  border-top: 1px solid #9EA3A3;
  width: 26vw;


`

export const LableBaseStats = styled.p`
  width: 5vw;
  text-align: end;

`

export const ValueBaseStats = styled.p`
  text-align: end;
  width: 3vw;
  margin-right: 3vw;

`

export const Description = styled.section`
  display: flex;
  flex-direction: column;
  width: 15vw;
  height: 16vh;
  margin-bottom: 6vh;
`

export const SectionMoves = styled.section`
  background: #FFFFFF;
  grid-column: 3 / 4;
  grid-row: 2 / 3;
  width: 16vw;
  height: 58vh;
  padding: 2vh;
  border-radius: 0.5em;
`
export const ListMoves = styled.ul`
  height: 35vh;
  width: 12vw;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 10px;
    
  }

  ::-webkit-scrollbar-thumb {
    background-color: #7EC6C3;
    border-radius: 10px; 
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #5EC2BE;
  }
`

export const ItemMoves = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  inline-size: max-content;
  border-radius: 0.7em;
  background-color:  #00000024;
  margin-bottom: 2vh;
  height: 5vh;
  padding-left: 1vw;
  padding-right: 1vw;
  border: 1px dashed #ffff;

`

export const NameMove = styled.p`
`

export const ImagePokemon = styled.img`
  position: absolute;
  height: 30vh;
  width: 30vh;
  right: 4%;
  top: -16%;
`


