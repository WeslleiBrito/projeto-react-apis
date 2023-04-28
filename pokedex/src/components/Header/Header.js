
import { HeaderContainer, LogoPokedex, TextAllPokemons, ButtonPokeball, ButtonDelete } from "./style";
import logo from "../../assets/img/logo/logo_pokemon.svg"


export const Header = ({namePage}) => {


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
            {config[namePage ? namePage : "home"]}
        </HeaderContainer>
    )
}


