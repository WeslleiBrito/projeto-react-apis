import { DetailsContainer, ItemBaseStats, LableBaseStats, ListBaseStats } from "./styleDetails";
import { useParams } from "react-router-dom";
import { useFechtPokemons } from "../../hooks/useFetchPokemons"
import { Header } from '../../components/Header/Header'
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { Progress } from "../../tools/progress"
import { colorGradientFinaly } from "../../tools/colorGradiente";
import { ValueState } from "../../tools/valueState";




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

                        const border = index === 3 || index === 4 ? "#DABD5A" : "#E06926"
                        const colorProgress = index === 3 || index === 4 ? { colorInitial: [255, 247, 224], colorFinaly: [255, 222, 106] } : { colorInitial: [216, 193, 178], colorFinaly: [255, 124, 45] }
                        if (title !== "Total") {
                            amount += initial.baseStats[index]
                        }


                        return (
                            <ItemBaseStats key={index}>
                                <LableBaseStats>{title}</LableBaseStats>
                                {initial.baseStats[index] > 0 ? <ValueState endValue={initial.baseStats[index]} /> : <ValueState endValue={amount} />}
                                {initial.baseStats[index] > 0 ? <Progress endValue={initial.baseStats[index]} gradient={colorGradientFinaly({ multiplierFactor: initial.baseStats[index], colorInitial: colorProgress.colorInitial, colorFinaly: colorProgress.colorFinaly })} border={border} /> : false}

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