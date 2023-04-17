
import { HeaderContainer, LogoPokedex, TextAllPokemons, ButtonPokeball, ButtonDelete } from "./style";
import logo from "../../assets/img/logo/logo_pokemon.svg"


export const Header = (props) => {
    const page = props.page
    return (
        <HeaderContainer>
            <LogoPokedex src={logo} alt="Logo pokémon" />
            {page.home && <ButtonPokeball>Pokédex</ButtonPokeball>}
            {page.pokeball && <ButtonDelete>Excluir da Pokédex</ButtonDelete>}
        </HeaderContainer>
    )
}