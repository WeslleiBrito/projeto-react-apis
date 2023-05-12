import { useContext } from "react"
import { PokemonsContext } from "../../contexts/PokemonsContext"
import { Main, List, Title } from "../PokemonListPage/styleHomePage"
import { Item } from "../../components/PokemonCard/PokemonCard"
import { colorBackgroundTypes } from "../../constants/BACKGROUND_TYPES"
import { colorTypePokemons, iconsTypes } from "../../constants/TYPES_POKEMONS"
import { Header } from "../../components/Header/Header"

export const Pokedex = () => {
    const context = useContext(PokemonsContext)
    const { pokelist } = context

    console.log(pokelist)
    return (
        <>
            <Header namePage={"pokedex"}/>
            <Main>
                <Title text={"Meus Pokémons"} />
                <List>
                    {
                        pokelist.map((pokemon, index) => {
                            const id = pokemon.id
                            const namePokemon = pokemon.name
                            const bgColor = colorBackgroundTypes[pokemon.types[0]]

                            const listType = pokemon.types.map((type) => {
                                return ({ icon: iconsTypes[type], color: colorTypePokemons[type], nameType: type })
                            })
                            const pathImagePokemon = pokemon.imagePokemonDefault

                            return (
                                <Item key={index} bgColor={bgColor} listType={listType} pathImagePokemon={pathImagePokemon} id={id} namePokemon={namePokemon} inPokelist={true} />
                            )
                        })
                    }
                </List>
            </Main>
        </>
    )
}