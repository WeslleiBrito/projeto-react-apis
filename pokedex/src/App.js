import { useState, useEffect } from "react";
import { GlobalStyle } from "./globalStyled";
import { Router } from "./Routes/Router";
import { Header } from "./components/Header/Header";
import { useFechtPokemons } from "./hooks/useFetchPokemons";
import { PokemonsContext } from "./contexts/PokemonsContext";

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

  const initial = useFechtPokemons().pokemons

  const [pokemons, setPokemons] = useState([])

  const [page, setPage] = useState({
    home: false,
    pokeball: true,
    details: false
  })

  const context = {
    pokemons: pokemons,
    setPokemons: setPokemons
  }

  useEffect(() => {
    setPokemons(initial)
  }, [initial])

  return (
    <>
      <GlobalStyle />
      <Header page={page} />
      <PokemonsContext.Provider value={context}>
        <Router />
      </PokemonsContext.Provider>

    </>
  );
}

export default App;
