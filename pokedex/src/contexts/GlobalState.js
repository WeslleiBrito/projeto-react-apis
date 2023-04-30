import { useFechtPokemons } from "../hooks/useFetchPokemons"
import { useState, useEffect } from "react"
import { PokemonsContext } from "./PokemonsContext"

export const GlobalState = (props) => {

    const {initial, loading} = useFechtPokemons()
 
    const [pokemons, setPokemons] = useState([])
    const [pokelist, setPokelist] = useState([])
    
    const [page, setPage] = useState("home")

    const addToPokeList = (id) => {
        const newItemPokelist = pokemons.filter((item) => {  return item.id === Number(id) })[0]
        const newListPokemons = pokemons.filter((item) => { return item.id !== Number(id) })

        setPokelist([...pokelist, newItemPokelist])
        setPokemons(newListPokemons)

        localStorage.setItem("pokelist", JSON.stringify([...pokelist, newItemPokelist]))
     
    }

    const removeToPokelist = (id) => {
        const newPokemon = pokelist.filter((item) => { return item.id === Number(id) })[0]
        const newItemPokelist = pokelist.filter((item) => { return item.id !== Number(id) })
        setPokelist(newItemPokelist)
        setPokemons([...pokemons, newPokemon].sort((a, b) => {
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

        if(window.localStorage.getItem("pokelist")){

            const valueLocal = JSON.parse(window.localStorage.getItem("pokelist"))
            const idLocal = valueLocal.map((item) => {return item.id})
            const newInitial = initial.filter((item) => {return !idLocal.includes(item.id)})

            setPokelist(JSON.parse(window.localStorage.getItem("pokelist")))
            setPokemons(newInitial)
            
        }else{
            setPokemons(initial)
        }

    }, [initial])

    return (
        <PokemonsContext.Provider value={context}>
            {props.children}
        </PokemonsContext.Provider>
    )
}