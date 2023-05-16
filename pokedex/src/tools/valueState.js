
import { useState, useEffect } from "react"
import { ValueBaseStats } from "../Pages/PokemonDetailPage/styleDetails";


export const ValueState = ({ endValue, fontWeight }) => {

    const [value, setValue] = useState(0)

    const valueProgress = () => {

        const interval = setInterval(() => {
            if (endValue > value) {
                setValue(value => value + 1);
            }

        }, 1);

        return () => clearInterval(interval);
    };

    useEffect(valueProgress, [endValue, value])

    return (
        <ValueBaseStats fontWeight={fontWeight}>{value}</ValueBaseStats>
    )
}