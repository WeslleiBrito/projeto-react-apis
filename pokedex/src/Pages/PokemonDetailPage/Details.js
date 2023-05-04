import { DetailsContainer, ItemBaseStats, LableBaseStats, ListBaseStats, ValueBaseStats } from "./styleDetails";
import { useParams } from "react-router-dom";
import { useFechtPokemons } from "../../hooks/useFetchPokemons"
import { Header } from '../../components/Header/Header'
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { Progress } from "../../tools/progress"
import { colorGradientFinaly } from "../../tools/colorGradiente";




export const Details = () => {

    const pathParams = useParams();
    const context = useContext(PokemonsContext)
    const { pokelist } = context
    const verefyIdInPokelist = pokelist.find((item) => { return item.id === Number(pathParams.id) })


    const { initial, loading } = useFechtPokemons(`pokemon/${pathParams.id}`)
    let amount = 0


    const renderStats = () => {

        const subtitles = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed", "Total"]

        return (
            <ListBaseStats>
                {
                    subtitles.map((title, index) => {

                        if (title !== "Total") {
                            amount += initial.baseStats[index]
                        }


                        return (
                            <ItemBaseStats key={index}>
                                <LableBaseStats>{title}</LableBaseStats>
                                <ValueBaseStats>{title !== "Total" ? initial.baseStats[index] : amount}</ValueBaseStats>
                                {initial.baseStats[index] > 0 ? <Progress endValue={initial.baseStats[index]} gradient={colorGradientFinaly({ multiplierFactor: initial.baseStats[index], colorInitial: [216, 193, 178], colorFinaly: [255, 124, 45] })} /> : false}

                            </ItemBaseStats>
                        )
                    })
                }
            </ListBaseStats>
        )

    }

    return (
        <>
            <Header namePage={"details"} itemInPokelist={verefyIdInPokelist ? true : false} idItem={pathParams.id} />

            <DetailsContainer>

                {!loading ? renderStats() : <></>}

            </DetailsContainer>
        </>

    )
}