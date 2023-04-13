
import {ItemPokemon, IdPokemon, ListTypes, ItemType, ImagePokemon, ButtonDetails, ButtonCapture} from './style'


export const Item = (props) => {

    const { bgColor, listIcons } = props
   
    return(
        <ItemPokemon bgColor={bgColor}>
            <ListTypes>
                {listIcons.map((path) => {return <ItemType path={path}/>})}
            </ListTypes>
            
        </ItemPokemon>
    )
}
