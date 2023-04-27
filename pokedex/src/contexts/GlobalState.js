import { useFechtPokemons } from "../hooks/useFetchPokemons"
import { useState, useEffect } from "react"
import { PokemonsContext } from "./PokemonsContext"

export const GlobalState = (props) => {

    const initial = useFechtPokemons().pokemons

    const [pokemons, setPokemons] = useState([])

    const [page, setPage] = useState("home")

    const context = {
        pokemons,
        setPokemons,
        page,
        setPage
    }

    useEffect(() => {
        setPokemons(initial)
    }, [initial])

    return (
        <PokemonsContext.Provider value={context}>
            {props.children}
        </PokemonsContext.Provider>
    )
}