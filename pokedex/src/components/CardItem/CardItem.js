
import {ItemPokemon, IdPokemon, NamePokemon, ListTypes, ItemType, ImagePokemon, Details, ButtonCapture} from './style'


export const Item = (props) => {

    const { bgColor, listType, pathImagePokemon, id, namePokemon } = props
    
    return(
        <ItemPokemon bgColor={bgColor}>
            <IdPokemon>{`#${id}`}</IdPokemon>
            <NamePokemon>{namePokemon}</NamePokemon>
            <ImagePokemon src={pathImagePokemon} alt='Imagem do Pokemon'/>
            <ListTypes>
                {listType.map((item, index) => {return <ItemType key={index} path={item.icon} colorType={item.color}/>})}
            </ListTypes>
            <Details>Detalhes</Details>
            <ButtonCapture>Capturar!</ButtonCapture>
        </ItemPokemon>
    )
}
