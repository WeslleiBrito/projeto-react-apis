
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from '../Pages/PokemonListPage/HomePage'
import { Details } from '../Pages/PokemonDetailPage/Details'

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/details/:id' element={<Details/>}/>
            </Routes>
        </BrowserRouter>
    )
}