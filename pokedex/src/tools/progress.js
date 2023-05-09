import { useState } from "react"
import React from "react";

import { Progress as ChakraProgress } from '@chakra-ui/react';


export const Progress = ({ endValue, gradient, border }) => {
    const [progress, setProgress] = useState(0);

    const progressCalc = () => {

        const interval = setInterval(() => {
            if (endValue * 0.7 > progress) {
                setProgress(progress => progress + 0.7);
            }

        }, 1);

        return () => clearInterval(interval);
    };

    React.useEffect(progressCalc, [endValue, progress]);


    return <ChakraProgress
        value={progress}
        size={'md'}
        maxW={"15vw"}
        bg={"transparent"}
        marginLeft={"2.5vw"}
        textAlign={"start"}
        width={"9vw"}
        height={'2vh'}
        sx={{
            "& > div": {
                background: `linear-gradient(to right, ${gradient})`,
                borderRadius: "0.3em",
                border: "2px",
                borderColor: `${border}`,

            },
        }}
        style={{ width: "100%", display: "flex" }}
    />
}


