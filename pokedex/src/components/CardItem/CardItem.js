
import { ItemPokemon, IdPokemon, NamePokemon, ListTypes, ItemType, ImagePokemon, Details, ButtonCapture, TypeIcon } from './style'
import { replaceText } from '../../App'
import { PokemonsContext } from '../../contexts/PokemonsContext'
import { useContext, useEffect } from 'react'

export const Item = (props) => {

    const context = useContext(PokemonsContext)
    const { pokemons, setPokemons, pokelist, setPokelist } = context

    const { bgColor, listType, pathImagePokemon, id, namePokemon } = props

    const addToPokemonList = (id) => {

        const newItemPokelist = pokemons.filter((item) => { return item.id === id })[0]
        const newListPokemons = pokemons.filter((item) => { return item.id !== id })

        setPokelist([...pokelist, newItemPokelist])
        setPokemons(newListPokemons)
    }


    return (
        <ItemPokemon bgColor={bgColor}>
            <IdPokemon>{`#${String(id).padStart(2, "0")}`}</IdPokemon>
            <NamePokemon>{namePokemon}</NamePokemon>
            <ImagePokemon src={pathImagePokemon} alt='Imagem do Pokemon' />
            <ListTypes>
                {listType.map((item, index) => {
                    return <ItemType key={index} path={item.icon} colorType={item.color}>
                        <TypeIcon src={item.icon} alt={`Tipo ${item.nameType}`} />
                        {replaceText(item.nameType, true)}
                    </ItemType>
                })}
            </ListTypes>
            <Details href='#'>Detalhes</Details>
            <ButtonCapture onClick={() => addToPokemonList(id)}>Capturar!</ButtonCapture>
        </ItemPokemon>
    )
}
