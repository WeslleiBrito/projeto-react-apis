import { useEffect, useState } from 'react'
import axios from 'axios';
import { URL_BASE } from '../constants/URL_BASE';
import { replaceText } from '../tools/replaceText';

export const useFechtPokemons = (path) => {
    const [initial, setResponseListPokemons] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {

                let listPokemons

                if (!path) {

                    try {
                        let response = await axios.get(`${URL_BASE}pokemon?offset=0&limit=21`)
                        response = response.data.results
                        const urlPokemons = response.map((item) => { return item.url })

                        const listPromises = urlPokemons.map(async (url) => {
                            try {
                                const pokemon = await axios(url)
                                return pokemon.data
                            } catch (error) {
                                console.log(error.response)
                            }
                        });

                        listPokemons = await Promise.all(listPromises)
                    } catch (error) {
                        console.log(error.response)
                    }


                } else {

                    try {
                        listPokemons = [(await axios.get(`${URL_BASE + path}`)).data]
                    } catch (error) {
                        console.log(error.response)
                    }

                }

                setResponseListPokemons(listPokemons.map((item) => {
                    return {
                        id: item.id,
                        name: replaceText(item.name, true),
                        types: item.types.map((itemTypes) => { return itemTypes.type.name }),
                        imagePokemonDefault: item.sprites.other["official-artwork"].front_default,
                        secondImagesPokemons: [item.sprites.front_default, item.sprites.back_default],
                        moves: item.moves.slice(0, 10).map((itemMove) => { return replaceText(itemMove.move.name, true, true) }),

                        baseStats: [
                            item.stats[0].base_stat,
                            item.stats[1].base_stat,
                            item.stats[2].base_stat,
                            item.stats[3].base_stat,
                            item.stats[4].base_stat,
                            item.stats[5].base_stat,
                        ],
                    }
                }))
                setLoading(false)
            } catch (error) {
                console.error(error.response);
            }
        };

        fetchData();
    }, [path]);

    return path ? { initial: initial[0], loading } : { initial, loading };
}


