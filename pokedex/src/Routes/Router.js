
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../Pages/PokemonListPage/HomePage'
import { Details } from '../Pages/PokemonDetailPage/Details'
import { Pokedex } from '../Pages/PokedexPage/PokedexPage'

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/details/:id' element={<Details />} />
                <Route path='/pokedex' element={<Pokedex />} />
            </Routes>
        </BrowserRouter>
    )
}