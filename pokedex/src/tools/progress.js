import { useState, useEffect } from "react"

export const ProgressCalc = (endValue) => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (value < endValue) {
                setValue(value + 1)
            }
        }, 0.1)

        return () => clearInterval(interval)
    }, [value, endValue])

    return (value)
}
