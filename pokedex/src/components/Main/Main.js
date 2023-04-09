import { colorBackgroundTypes } from "../../constatnts/BACKGROUND_TYPES";
import { iconsTypes, colorTypePokemons } from "../../constatnts/TYPES_POKEMONS";
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

                    return(
                        <Item key={index} bgColor={bgColor}/>
                    )
                })}
            </List>
        </Main>
            

        
    )
}