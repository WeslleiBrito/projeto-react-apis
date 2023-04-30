import { DetailsContainer } from "./styleDetails";
import { useParams } from "react-router-dom";
import { useFechtPokemons } from "../../hooks/useFetchPokemons"
import { Header } from '../../components/Header/Header'
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext";

export const Details = () => {

    const pathParams = useParams();
    const context = useContext(PokemonsContext)
    const {pokelist} = context
    const verefyIdInPokelist = pokelist.find((item) => {return item.id === Number(pathParams.id)})
    
    const {initial, loading} = useFechtPokemons(`pokemon/${pathParams.id}`)
   
    
    return (
        <>
            <Header namePage={"details"} itemInPokelist={verefyIdInPokelist ? true : false} idItem={pathParams.id}/>

            <DetailsContainer>

            </DetailsContainer>
        </>
        
    )
}