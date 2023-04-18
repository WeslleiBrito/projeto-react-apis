import { useEffect, useState } from 'react'
import axios from 'axios';
import { URL_BASE } from '../constants/URL_BASE';

export const useFechtPokemons = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${URL_BASE}pokemon?offset=0&limit=21`);
                const urlPokemons = response.data.results.map((item) => { return item.url })

                const listPromises = urlPokemons.map((url) => {
                    axios.get(url)
                        .then((response) => {
                            return response.data
                        })
                        .catch((error) => {
                            console.log(error.response)
                        })
                })

                const listPokemons = await Promise.all(listPromises)
                setPokemons(listPokemons)

            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return pokemons;
}


