import axios from "axios";
import { useState, useEffect } from "react";
import { GlobalStyle } from "./globalStyled";
import { URL_BASE } from "./constants/URL_BASE";
import { Router } from "./Routes/Router";
import { Header } from "./components/Header/Header";

export const replaceText = (text, firstUpperCase, space) => {
  const regex = /[a-z]/i
  const textArray = text.split("")
  let uppercase = false

  const textClean = textArray.map((caracter, index) => {


    if (regex.test(caracter)) {

      const letter = ((uppercase || index === 0) & firstUpperCase) || (uppercase & !firstUpperCase) ? caracter.toUpperCase() : caracter
      uppercase = false
      return letter
    }

    uppercase = true
    return space ? " " : ""

  })

  return textClean.toString().replaceAll(",", "")
}

function App() {

  const [pokemons, setPokemons] = useState([])
  const [page, setPage] = useState({
    home: false,
    pokeball: true,
    details: false
  })

  const getPokemon = async () => {
    try {
      const result = (await axios(`${URL_BASE}pokemon?offset=0&limit=21`)).data.results
      const pokemonUrls = result.map((item) => item.url)

      // Nessa etapa ele retorna uma lista com as promessas de que ele vai ter um resultado daquelas requisições
      const pokemonPromises = pokemonUrls.map(async (url) => {
        try {
          const pokemon = await axios(url)
          return pokemon.data
        } catch (error) {
          console.log(error.response)
        }
      });
      /* Nessa etapa a função promise.all aguarda que todas as promessas sejam resulvida
       e ai sim retorna a lista com os resultados, tanto positivo, como negativo*/

      const pokemonResults = await Promise.all(pokemonPromises)

      const pokemonsClear = pokemonResults.map((item) => {
        return {
          id: item.id,
          name: replaceText(item.name, true),
          types: item.types.map((itemTypes) => { return itemTypes.type.name }),
          imagePokemonDefault: item.sprites.other.dream_world.front_default,
          secondImagesPokemons: [item.sprites.front_default, item.sprites.back_default, item.sprites.front_female, item.sprites.back_female],
          moves: item.moves.slice(0, 10).map((itemMove) => { return replaceText(itemMove.move.name, true, true) }),
          baseStats: item.stats.map((statItem) => {
            return { [replaceText(statItem.stat.name)]: statItem.base_stat }
          })
        }
      })

      setPokemons(pokemonsClear)

    } catch (error) {
      console.log(error.response)
    }
  };

  useEffect(() => {
    getPokemon()
  }, [])


  return (
    <>
      <GlobalStyle />
      <Header page={page} />
      <Router pokemons={pokemons} />
    </>
  );
}

export default App;
