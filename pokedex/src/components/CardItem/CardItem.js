
import {ItemPokemon, IdPokemon, ListTypes, ItemType, ImagePokemon, ButtonDetails, ButtonCapture} from './style'


export const Item = (props) => {

    const { bgColor } = props

    return(
        <ItemPokemon bgColor={bgColor}>
        </ItemPokemon>
    )
}
