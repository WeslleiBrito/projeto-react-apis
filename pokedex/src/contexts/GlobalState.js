import { useFechtPokemons } from "../hooks/useFetchPokemons"
import { useState, useEffect } from "react"
import { PokemonsContext } from "./PokemonsContext"
import { searthPokemonID } from "../tools/searthPokemon"
import { replaceText } from "../tools/replaceText"


export const GlobalState = (props) => {

    const { initial, loading } = useFechtPokemons()

    const [pokemons, setPokemons] = useState([])
    const [pokelist, setPokelist] = useState([])

    const [page, setPage] = useState("home")

    const addToPokeList = (id) => {
        const newItemPokelist = pokemons.filter((item) => { return item.id === Number(id) })[0]
        const newListPokemons = pokemons.filter((item) => { return item.id !== Number(id) })

        setPokelist([...pokelist, newItemPokelist])
        setPokemons(newListPokemons)

        localStorage.setItem("pokelist", JSON.stringify([...pokelist, newItemPokelist]))

    }

    const removeToPokelist = (id) => {
        const newPokemon = pokelist.filter((item) => { return item.id === Number(id) })[0]
        const newItemPokelist = pokelist.filter((item) => { return item.id !== Number(id) })
        setPokelist(newItemPokelist)

        setPokemons([...pokemons.slice(0, pokemons.length - 1), newPokemon].sort((a, b) => {
            if (a.id < b.id) {
                return -1;
            }
            if (a.id > b.id) {
                return 1;
            }
            return 0;
        }))

        localStorage.setItem("pokelist", JSON.stringify(newItemPokelist))
    }

    const context = {
        pokemons,
        setPokemons,
        page,
        setPage,
        pokelist,
        setPokelist,
        loading,
        addToPokeList,
        removeToPokelist
    }

    useEffect(() => {

        if (window.localStorage.getItem("pokelist")) {

            const valueLocal = JSON.parse(window.localStorage.getItem("pokelist"))
            const idLocal = valueLocal.map((item) => { return item.id })
            const newInitial = initial.filter((item) => { return !idLocal.includes(item.id) })

            setPokelist(JSON.parse(window.localStorage.getItem("pokelist")))
            setPokemons(newInitial)

        } else {
            setPokemons(initial)
        }

    }, [initial])

    useEffect(() => {

        if (pokemons[pokemons.length - 1] && pokemons.length < 21) {
            let newPokemon
            const sortLastId = pokelist.sort((a, b) => {

                if (a.id < b.id) {
                    return -1;
                }
                if (a.id > b.id) {
                    return 1;
                }
                return 0;
            })
            const lastIdPokemons = pokemons[pokemons.length - 1].id
            const lastIdPokelist = sortLastId[sortLastId.length - 1].id

            const lastId = lastIdPokemons > lastIdPokelist ? lastIdPokemons : lastIdPokelist

            searthPokemonID(lastId < 21 ? 21 + 1 : lastId + 1, (pokemon) => {
                newPokemon = {
                    id: pokemon.id,
                    name: replaceText(pokemon.name, true),
                    types: pokemon.types.map((itemTypes) => { return itemTypes.type.name }),
                    imagePokemonDefault: pokemon.sprites.other["official-artwork"].front_default,
                    secondImagesPokemons: [pokemon.sprites.front_default, pokemon.sprites.back_default, pokemon.sprites.front_female, pokemon.sprites.back_female],
                    moves: pokemon.moves.slice(0, 10).map((itemMove) => { return replaceText(itemMove.move.name, true, true) }),

                    baseStats: [
                        pokemon.stats[0].base_stat,
                        pokemon.stats[1].base_stat,
                        pokemon.stats[2].base_stat,
                        pokemon.stats[3].base_stat,
                        pokemon.stats[4].base_stat,
                        pokemon.stats[5].base_stat,
                    ],
                }

                setPokemons([...pokemons, newPokemon])
            });



        }

    }, [pokemons, pokelist])

    return (
        <PokemonsContext.Provider value={context}>
            {props.children}
        </PokemonsContext.Provider>
    )
}