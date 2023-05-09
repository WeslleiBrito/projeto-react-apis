import {
    DetailsContainer,
    CardDetalis,
    Title,
    ListSecondImages,
    ItemSecondImage,
    SecondImage,
    SectionBaseStats,
    ListBaseStats,
    ItemBaseStats,
    LableBaseStats,
    Description,
    SectionMoves,
    ListMoves,
    ItemMoves,
    ImagePokemon
} from "./styleDetails";

import {
    IdPokemon,
    ItemType,
    ListTypes,
    NamePokemon,
    NameType,
    TypeIcon
} from "../../components/PokemonCard/style"

import { useParams } from "react-router-dom";
import { useFechtPokemons } from "../../hooks/useFetchPokemons"
import { Header } from '../../components/Header/Header'
import { useContext } from "react";
import { PokemonsContext } from "../../contexts/PokemonsContext";
import { Progress } from "../../tools/progress"
import { colorGradientFinaly } from "../../tools/colorGradiente";
import { ValueState } from "../../tools/valueState";
import { iconsTypes, colorTypePokemons } from "../../constants/TYPES_POKEMONS";
import { colorBackgroundTypes } from "../../constants/BACKGROUND_TYPES";
import { replaceText } from "../../tools/replaceText";



export const Details = () => {

    const pathParams = useParams();
    const context = useContext(PokemonsContext)
    const { pokelist } = context
    const verefyIdInPokelist = pokelist.find((item) => { return item.id === Number(pathParams.id) })


    const { initial, loading } = useFechtPokemons(`pokemon/${pathParams.id}`)
    let amount = 0

    const renderStats = () => {

        const subtitles = ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed", "Total"]
        console.log(initial)
        return (
            <DetailsContainer>
                <Title title={"Detalhes"} color={"#ffff"} padding={"7vh"}/>
                <CardDetalis color={colorBackgroundTypes[initial.types[0]]}>
                    <ListSecondImages>
                        {
                            initial.secondImagesPokemons.map((url, index) => {
                                if (url) {
                                    return (
                                        <ItemSecondImage key={index}>
                                            <SecondImage src={url} alt={`imagem do pokemon ${initial.name}`} />
                                        </ItemSecondImage>
                                    )
                                }

                                return false

                            })
                        }
                    </ListSecondImages>

                    <SectionBaseStats>
                        <Title title={"Base stats"} />
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
                    </SectionBaseStats>

                    <Description>
                        <IdPokemon>{`#${String(initial.id).padStart(2, "0")}`}</IdPokemon>

                        <NamePokemon>{initial.name}</NamePokemon>

                        <ListTypes>
                            {
                                initial.types.map((type, index) => {
                                    return (
                                        <ItemType key={index} colorType={colorTypePokemons[type]}>
                                            <TypeIcon src={iconsTypes[type]} />
                                            <NameType>{replaceText(type, true)}</NameType>
                                        </ItemType>
                                    )
                                })
                            }
                        </ListTypes>
                    </Description>

                    <SectionMoves>
                        <Title title={"Moves:"} />
                        <ListMoves>
                            {
                                initial.moves.map((move, index) => {
                                    return (
                                        <ItemMoves key={index}>{move}</ItemMoves>
                                    )
                                })
                            }
                        </ListMoves>
                    </SectionMoves>
                    <ImagePokemon src={initial.imagePokemonDefault} />
                </CardDetalis>

            </DetailsContainer>
        )

    }

    return (
        <>
            <Header namePage={"details"} itemInPokelist={verefyIdInPokelist ? true : false} idItem={pathParams.id} />
            {!loading ? renderStats() : <></>}
        </>

    )
}