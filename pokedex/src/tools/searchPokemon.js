import axios from "axios"
import { URL_BASE } from "../constants/URL_BASE"
import { replaceText } from "./replaceText"

export const searthPokemons = async (id) => {
    try {
        const response = await axios.get(`${URL_BASE}pokemon/${id}`);

        const data = response.data;

        const types = data.types.map((itemTypes) => {
            return itemTypes.type.name;
        });

        const imagePokemonDefault = data.sprites.other.dream_world.front_default;

        const secondImagesPokemons = [
            data.sprites.front_default,
            data.sprites.back_default,
            data.sprites.front_female,
            data.sprites.back_female,
        ];

        const moves = data.moves
            .slice(0, 10)
            .map((itemMove) => replaceText(itemMove.move.name, true, true));

        const baseStats = [
            data.stats[0].base_stat,
            data.stats[1].base_stat,
            data.stats[2].base_stat,
            data.stats[3].base_stat,
            data.stats[4].base_stat,
            data.stats[5].base_stat,
        ];

        const pokemon = {
            id: data.id,
            name: replaceText(data.name, true),
            types,
            imagePokemonDefault,
            secondImagesPokemons,
            moves,
            baseStats,
        };

        return pokemon;
    } catch (error) {
        console.error(error);
    }
};