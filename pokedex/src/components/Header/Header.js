
import { HeaderContainer, LogoPokedex, TextAllPokemons, ButtonPokeball, ButtonDelete } from "./style";
import logo from "../../assets/img/logo/logo_pokemon.svg"
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { useContext } from "react";


export const Header = () => {

    const context = useContext(PokemonsContext)
    const { page } = context

    const config = {

        home: (
            <>
                <LogoPokedex src={logo} alt="Logo pokémon" />
                <ButtonPokeball>Pokédex</ButtonPokeball>
            </>

        ),

        pokedex: (
            <>
                <TextAllPokemons>Todos Pokémons</TextAllPokemons>
                <LogoPokedex src={logo} alt="Logo pokémon" />

            </>

        ),

        details: (
            <>
                <TextAllPokemons>Todos Pokémons</TextAllPokemons>
                <LogoPokedex src={logo} alt="Logo pokémon" />
                <ButtonDelete>Excluir da Pokédex</ButtonDelete>
            </>
        )

    }


    return (
        <HeaderContainer>
            {config[page]}
        </HeaderContainer>
    )
}


