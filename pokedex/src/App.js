import { useState, useEffect } from "react";
import { GlobalStyle } from "./globalStyled";
import { Router } from "./Routes/Router";
import { Header } from "./components/Header/Header";
import { useFechtPokemons } from "./hooks/useFetchPokemons";

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

  const {pokemons} = useFechtPokemons()
  const [page, setPage] = useState({
    home: false,
    pokeball: true,
    details: false
  })


  return (
    <>
      <GlobalStyle />
      <Header page={page} />
      <Router pokemons={pokemons} />
    </>
  );
}

export default App;
