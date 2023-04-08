import axios from "axios";
import { useState, useEffect } from "react";
import { URL_BASE } from "./constatnts/URL_BASE";


function App() {

  const [pokemons, setPokemons] = useState([])

  const getPokemon = async () => {
    try {
      const result = (await axios(`${URL_BASE}pokemon?offset=0&limit=40`)).data.results;
      const pokemonUrls = result.map((item) => item.url);
      
      // Nessa etapa ele retorna uma lista com as promessas de que ele vai ter um resultado daquelas requisições
      const pokemonPromises = pokemonUrls.map(async (url) => {
        try {
          const pokemon = await axios(url);
          return pokemon.data;
        } catch (error) {
          console.log(error.response);
        }
      });
   /* Nessa etapa a função promise.all aguarda que todas as promessas sejam resulvida
    e ai sim retorna a lista com os resultados, tanto positivo, como negativo*/

      const pokemonResults = await Promise.all(pokemonPromises);

      const pokemonsClear = pokemonResults.map((item) => {
        return {
          id: item.id, 
          name: item.name,
          types: item.types.map((itemTypes) => {return itemTypes.type.name}),
          imagePokemonDefault: item.sprites.other.dream_world.front_default,
          secondImagesPokemons: {
            frontMale: item.sprites.front_default,
            frontFemale: item.sprites.front_female,
            backMale: item.sprites.back_default,
            backFemale: item.sprites.back_female
          }, 
          moves: item.moves.slice(0, 10).map((itemMove) => {return itemMove.move.name}),
          baseStats: item.stats.map((statItem) => {
            return {[statItem.stat.name]: statItem.base_stat}
          })
        }
      })
      setPokemons(pokemonsClear);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getPokemon()
  }, [])

  useEffect(() => {
    console.log(pokemons)
  }, [pokemons])


  return (
   <>

   </>
  );
}

export default App;
