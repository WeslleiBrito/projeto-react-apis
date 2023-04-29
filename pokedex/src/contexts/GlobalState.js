import { useFechtPokemons } from "../hooks/useFetchPokemons"
import { useState, useEffect } from "react"
import { PokemonsContext } from "./PokemonsContext"

export const GlobalState = (props) => {

    const {initial, loading} = useFechtPokemons()
 
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