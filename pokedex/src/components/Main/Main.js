import { colorBackgroundTypes } from "../../constants/BACKGROUND_TYPES";
import { iconsTypes, colorTypePokemons } from "../../constants/TYPES_POKEMONS";
import { Item } from "../CardItem/CardItem";
import { List, Title, Main } from "./style";


export const MainContainer = (props) => {
    const { pokemons } = props
    console.log(pokemons)
  
    return(
        <Main>
            <Title>Todos Pokémons</Title>
            <List>
                {pokemons.map((pokemon, index) =>{
                    const bgColor = colorBackgroundTypes[pokemon.types[0]]
                    const listIcons = pokemon.types.map((type) => {return iconsTypes[type]})

                    return(
                        <Item key={index} bgColor={bgColor} listIcons={listIcons}/>
                    )
                })}
            </List>
        </Main>
            

        
    )
}