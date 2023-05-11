import { colorBackgroundTypes } from "../../constants/BACKGROUND_TYPES";
import { iconsTypes, colorTypePokemons } from "../../constants/TYPES_POKEMONS";
import { Item } from "../../components/PokemonCard/PokemonCard";
import { List, Main, TitleAllPokemons, } from "./styleHomePage";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Loading } from "../../components/Loading/Loading";


export const HomePage = () => {

    const context = useContext(PokemonsContext)
    const { pokemons, loading } = context


    const MainPokemons = () => {
        return (
            <Main>
                <TitleAllPokemons text={"Todos Pokémons"} />
                <List>
                    {pokemons.map((pokemon, index) => {
                        const id = pokemon.id
                        const namePokemon = pokemon.name
                        const bgColor = colorBackgroundTypes[pokemon.types[0]]
                        const listType = pokemon.types.map((type) => {
                            return ({ icon: iconsTypes[type], color: colorTypePokemons[type], nameType: type })
                        })
                        const pathImagePokemon = pokemon.imagePokemonDefault

                        return (
                            <Item key={index} bgColor={bgColor} listType={listType} pathImagePokemon={pathImagePokemon} id={id} namePokemon={namePokemon} />
                        )
                    }
                    )
                    }
                </List>
            </Main>
        )
    }

    return (
        <>
            <Header />
            {loading ? <Loading /> : MainPokemons()}
        </>



    )
}