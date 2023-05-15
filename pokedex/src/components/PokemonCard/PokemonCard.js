
import { ItemPokemon, IdPokemon, ListTypes, ItemType, ImagePokemon, ButtonDetalis, ButtonCapture, ButtonRemove, TypeIcon, NameType, Actions } from './style'
import { Heading } from '@chakra-ui/react'
import { replaceText } from '../../tools/replaceText'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import { useContext } from 'react'
import { goDetails } from "../../Routes/coordinator"
import { useNavigate } from 'react-router-dom'


export const Item = ({ bgColor, listType, pathImagePokemon, id, namePokemon, inPokelist, onOpen }) => {

    const navigate = useNavigate()

    const context = useContext(PokemonsContext)
    const { addToPokeList, removeToPokelist, changleMensage } = context

    return (
        <ItemPokemon bgColor={bgColor}>
            <IdPokemon text={`#${String(id).padStart(2, "0")}`} />
            <Heading as={"h2"} color={"#ffff"} fontWeight={"700"} marginBottom={"1.5vh"}>{namePokemon}</Heading>
            <ImagePokemon src={pathImagePokemon} alt='Imagem do Pokemon' />
            <ListTypes>
                {listType.map((item, index) => {
                    return <ItemType key={index} path={item.icon} colorType={item.color}>
                        <TypeIcon src={item.icon} alt={`Tipo ${item.nameType}`} />
                        <NameType>{replaceText(item.nameType, true)}</NameType>
                    </ItemType>
                })}
            </ListTypes>
            <Actions>
                <ButtonDetalis text={"Detalhes"} goDetalis={goDetails} navigate={navigate} id={id} />
                {!inPokelist && <ButtonCapture text={"Capiturar!"} addToPokeList={addToPokeList} id={id} onOpen={onOpen} changleMensage={changleMensage} />}
                {inPokelist && <ButtonRemove text={"Excluir"} removeToPokelist={removeToPokelist} id={id} onOpen={onOpen} changleMensage={changleMensage} />}
            </Actions>

        </ItemPokemon>
    )
}
