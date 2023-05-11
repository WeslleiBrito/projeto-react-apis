
import { ItemPokemon, IdPokemon, ListTypes, ItemType, ImagePokemon, Details, ButtonCapture, TypeIcon, NameType } from './style'
import { Heading } from '@chakra-ui/react'
import { replaceText } from '../../tools/replaceText'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import { useContext } from 'react'
import { goDetails } from "../../Routes/coordinator"
import { useNavigate } from 'react-router-dom'


export const Item = ({ bgColor, listType, pathImagePokemon, id, namePokemon }) => {

    const navigate = useNavigate()

    const context = useContext(PokemonsContext)
    const { addToPokeList } = context


    return (
        <ItemPokemon bgColor={bgColor}>
            <IdPokemon text={`#${String(id).padStart(2, "0")}`} />
            {/* <Heading as={"h2"} color={"#ffff"} fontWeight={"700"}>{`#${String(id).padStart(2, "0")}`}</Heading> */}
            <Heading as={"h2"} color={"#ffff"} fontWeight={"700"}>{namePokemon}</Heading>
            <ImagePokemon src={pathImagePokemon} alt='Imagem do Pokemon' />
            <ListTypes>
                {listType.map((item, index) => {
                    return <ItemType key={index} path={item.icon} colorType={item.color}>
                        <TypeIcon src={item.icon} alt={`Tipo ${item.nameType}`} />
                        <NameType>{replaceText(item.nameType, true)}</NameType>
                    </ItemType>
                })}
            </ListTypes>
            <Details onClick={() => goDetails(navigate, id)}>Detalhes</Details>
            <ButtonCapture onClick={() => addToPokeList(id)}>Capturar!</ButtonCapture>
        </ItemPokemon>
    )
}
