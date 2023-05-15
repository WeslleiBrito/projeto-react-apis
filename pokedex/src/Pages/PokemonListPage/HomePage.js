import { colorBackgroundTypes } from "../../constants/BACKGROUND_TYPES";
import { iconsTypes, colorTypePokemons } from "../../constants/TYPES_POKEMONS";
import { Item } from "../../components/PokemonCard/PokemonCard";
import { List, Main, Title, } from "./styleHomePage";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { useContext } from "react";
import { Header } from "../../components/Header/Header";
import { Loading } from "../../components/Loading/Loading";
import { VerticallyCenter } from "../../components/Modal/Modal";
import { useDisclosure } from "@chakra-ui/react";


export const HomePage = () => {

    const context = useContext(PokemonsContext)
    const { pokemons, loading, mensage } = context
    const { isOpen, onOpen, onClose } = useDisclosure()

    const MainPokemons = () => {
        return (
            <Main>
                <Title text={"Todos Pokémons"} />
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
                            <Item key={index} bgColor={bgColor} listType={listType} pathImagePokemon={pathImagePokemon} id={id} namePokemon={namePokemon} onOpen={onOpen} />
                        )
                    }
                    )
                    }

                    <VerticallyCenter isOpen={isOpen} onClose={onClose} heading={mensage[0]} text={mensage[1]} />
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