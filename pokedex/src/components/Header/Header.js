
import { HeaderContainer, LogoPokedex, TextAllPokemons, ButtonPokeball, ButtonDelete, ButtonAddPokelist } from "./style";
import logo from "../../assets/img/logo/logo_pokemon.svg"
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { useState } from "react";
import { goPreviousPage } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";


export const Header = ({namePage, itemInPokelist, idItem}) => {

    const navigate = useNavigate()
    const context = useContext(PokemonsContext)
    const {addToPokeList, removeToPokelist} = context

    const [idInpokelist, setIdInPokelist] = useState(itemInPokelist)

    const changeIdInPokelist = () => {
        setIdInPokelist(!idInpokelist)
    }


    const config = {

        home: (
            <>
                <LogoPokedex src={logo} alt="Logo pokémon" />
                <ButtonPokeball>Pokédex</ButtonPokeball>
            </>

        ),

        pokedex: (
            <>
                <TextAllPokemons onClick={() => goPreviousPage(navigate)}>Todos Pokémons</TextAllPokemons>
                <LogoPokedex src={logo} alt="Logo pokémon" />

            </>

        ),

        details: (
            <>
                <TextAllPokemons onClick={() => goPreviousPage(navigate)}>Todos Pokémons</TextAllPokemons>
                <LogoPokedex src={logo} alt="Logo pokémon" />
                {idInpokelist ? <ButtonDelete onClick={() => {removeToPokelist(idItem); changeIdInPokelist()}}>Excluir da Pokedex</ButtonDelete> : <ButtonAddPokelist onClick={() => {addToPokeList(idItem); changeIdInPokelist()}}>Adicionar a Pokedex</ButtonAddPokelist>}
            </>
        )

    }


    return (
        <HeaderContainer>
            {config[namePage ? namePage : "home"]}
        </HeaderContainer>
    )
}


