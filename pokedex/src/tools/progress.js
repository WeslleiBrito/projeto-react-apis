import { useState } from "react"
import React from "react";

import { Progress as ChakraProgress } from '@chakra-ui/react';

export const Progress = ({ endValue, gradient }) => {
    const [progress, setProgress] = useState(0);
    const maxModify = (((endValue + 10) - 100) / 100 * 15) + 15
    const progressCalc = () => {

        const interval = setInterval(() => {
            if (endValue > progress) {
                setProgress(progress => progress + 1);
            }

        }, 0.1);

        return () => clearInterval(interval);
    };

    React.useEffect(progressCalc, [endValue, progress]);


    return <ChakraProgress
        value={progress}
        size={'md'}
        maxW={endValue < 100 ? "15vw" : `${maxModify <= 22 ? maxModify : 22}vw`}
        bg={"transparent"}
        marginLeft={"2.5vw"}
        textAlign={"start"}
        sx={{
            "& > div": {
                background: `linear-gradient(to right, ${gradient})`,
                borderRadius: "0.2em"
            },
        }}
        style={{ width: "100%", display: "flex" }}
    />
}


