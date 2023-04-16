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
                            const id = String(pokemon.id).padStart(2, "0")
                            const namePokemon = pokemon.name
                            const bgColor = colorBackgroundTypes[pokemon.types[0]]
                            const listType = pokemon.types.map((type) => {
                                return ({icon: iconsTypes[type], color: colorTypePokemons[type], nameType: type})
                            })
                            const pathImagePokemon = pokemon.imagePokemonDefault

                            return(
                                <Item key={index} bgColor={bgColor} listType={listType} pathImagePokemon={pathImagePokemon} id={id} namePokemon={namePokemon}/>
                            )
                        }
                    )
                }
            </List>
        </Main>
            

        
    )
}