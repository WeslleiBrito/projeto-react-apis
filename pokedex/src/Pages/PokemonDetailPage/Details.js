import { DetailsContainer, ProgressBaseStats } from "./styleDetails";
import { useParams } from "react-router-dom";
import { useFechtPokemons } from "../../hooks/useFetchPokemons"
import { Header } from '../../components/Header/Header'
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { ProgressCalc } from "../../tools/progress"
import { colorGradientFinaly } from "../../tools/colorGradiente";


export const Details = () => {

    const pathParams = useParams();
    const context = useContext(PokemonsContext)
    const { pokelist } = context
    const verefyIdInPokelist = pokelist.find((item) => { return item.id === Number(pathParams.id) })


    const { initial, loading } = useFechtPokemons(`pokemon/${pathParams.id}`)
    const values = [49, 62, 70, 56, 90]


    return (
        <>
            <Header namePage={"details"} itemInPokelist={verefyIdInPokelist ? true : false} idItem={pathParams.id} />

            <DetailsContainer>
                {values.map((value, index) => {
                    return (
                        <ProgressBaseStats
                            value={ProgressCalc(value)}
                            key={index}
                            gradient={colorGradientFinaly({ multiplierFactor: value, colorInitial: [216, 193, 178], colorFinaly: [255, 124, 45] })}
                        />
                    )
                })}
            </DetailsContainer>
        </>

    )
}