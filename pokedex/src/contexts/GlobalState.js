import { useFechtPokemons } from "../hooks/useFetchPokemons"
import { useState, useEffect } from "react"
import { PokemonsContext } from "./PokemonsContext"

export const GlobalState = (props) => {

    const {responseListPokemons, loading} = useFechtPokemons()
 
    const [pokemons, setPokemons] = useState([])
    const [pokelist, setPokelist] = useState([])
    
    const [page, setPage] = useState("home")

    const context = {
        pokemons,
        setPokemons,
        page,
        setPage,
        pokelist,
        setPokelist, 
        loading
    }

    useEffect(() => {
        setPokemons(responseListPokemons)
    }, [responseListPokemons])

    return (
        <PokemonsContext.Provider value={context}>
            {props.children}
        </PokemonsContext.Provider>
    )
}