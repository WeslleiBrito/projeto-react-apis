
import { HeaderContainer, LogoPokedex, ButtonPokedex, ButtonReturnPage, AddToPokelistBotton, RemoveToPokelistBotton } from "./style";
import logo from "../../assets/img/logo/logo_pokemon.svg"
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { useState } from "react";
import { goPreviousPage, goPokedex } from "../../Routes/coordinator";
import { useNavigate } from "react-router-dom";
import { VerticallyCenter } from "../Modal/Modal";
import { useDisclosure } from "@chakra-ui/react";




export const Header = ({ namePage, itemInPokelist, idItem }) => {

    const navigate = useNavigate()
    const context = useContext(PokemonsContext)
    const { addToPokeList, removeToPokelist, mensage, changleMensage } = context
    const { isOpen, onOpen, onClose } = useDisclosure()

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
                <ButtonReturnPage actionFunction={goPreviousPage} navigate={navigate} />
                <LogoPokedex src={logo} alt="Logo pokémon" />

            </>

        ),

        details: (
            <>
                <ButtonReturnPage actionFunction={goPreviousPage} navigate={navigate} />
                <LogoPokedex src={logo} alt="Logo pokémon" />
                {idInpokelist ? <RemoveToPokelistBotton removeToPokelist={removeToPokelist} id={idItem} changeIdInPokelist={changeIdInPokelist} onOpen={onOpen} changleMensage={changleMensage} /> :
                    <AddToPokelistBotton addToPokeList={addToPokeList} id={idItem} changeIdInPokelist={changeIdInPokelist} onOpen={onOpen} changleMensage={changleMensage} />}
            </>
        )

    }


    return (
        <HeaderContainer>
            {config[namePage ? namePage : "home"]}
            <VerticallyCenter isOpen={isOpen} onClose={onClose} heading={mensage[0]} text={mensage[1]} />
        </HeaderContainer>
    )
}


