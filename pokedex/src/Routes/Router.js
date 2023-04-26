
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainContainer } from '../pages/Main'


export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<MainContainer />} />
            </Routes>
        </BrowserRouter>
    )
}