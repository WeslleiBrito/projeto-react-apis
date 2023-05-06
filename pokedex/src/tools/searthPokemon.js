import { URL_BASE } from "../constants/URL_BASE";

export const  searthPokemonID = (id, callback) => {
    fetch(`${URL_BASE}pokemon/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Não foi possível buscar o Pokémon.');
        }
        return response.json();
      })
      .then((data) => {
        callback(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  
  // Exemplo de uso da função

  