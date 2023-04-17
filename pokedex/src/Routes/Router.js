
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainContainer } from '../pages/Main'


export const Router = (props) => {

    const { pokemons } = props

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainContainer pokemons={pokemons} />} />
            </Routes>
        </BrowserRouter>
    )
}