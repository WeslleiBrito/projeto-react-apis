
import { HeaderContainer, LogoPokedex, ButtonPokedex, ButtonReturnPage, AddToPokelistBotton, RemoveToPokelistBotton } from "./style";
import logo from "../../assets/img/logo/logo_pokemon.svg"
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { useState } from "react";
import { goPreviousPage, goPokedex } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";



export const Header = ({ namePage, itemInPokelist, idItem }) => {

    const navigate = useNavigate()
    const context = useContext(PokemonsContext)
    const { addToPokeList, removeToPokelist } = context

    const [idInpokelist, setIdInPokelist] = useState(itemInPokelist)

    const changeIdInPokelist = () => {
        setIdInPokelist(!idInpokelist)
    }


    const config = {

        home: (
            <>
                <LogoPokedex src={logo} alt="Logo pokémon" />
                <ButtonPokedex text={"Pokédex"} goPokedex={goPokedex} navigate={navigate} />
            </>

        ),

        pokedex: (
            <>
                <ButtonReturnPage actionFunction={goPreviousPage} navigate={navigate}/>
                <LogoPokedex src={logo} alt="Logo pokémon" />

            </>

        ),

        details: (
            <>
                <ButtonReturnPage actionFunction={goPreviousPage} navigate={navigate}/>
                <LogoPokedex src={logo} alt="Logo pokémon" />
                {idInpokelist ? <RemoveToPokelistBotton removeToPokelist={removeToPokelist} id={idItem} changeIdInPokelist={changeIdInPokelist}/> : <AddToPokelistBotton addToPokeList={addToPokeList} id={idItem} changeIdInPokelist={changeIdInPokelist}/>}
            </>
        )

    }


    return (
        <HeaderContainer>
            {config[namePage ? namePage : "home"]}
        </HeaderContainer>
    )
}


