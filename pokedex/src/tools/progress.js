import { useState } from "react"
import React from "react";

import { Progress as ChakraProgress } from '@chakra-ui/react';

export const Progress = ({ endValue, gradient }) => {
    const [progress, setProgress] = useState(0);

    const progressCalc = () => {

        const interval = setInterval(() => {
            if (endValue > progress) {
                setProgress(progress => progress + 1);
            }

        }, 0.1);

        return () => clearInterval(interval);
    };

    React.useEffect(progressCalc, [endValue, progress]);


    return <ChakraProgress margin={'2'}
        value={progress} borderRadius={'0.2em'}
        size={'md'}
        maxW={"15vw"}
        sx={{
            "& > div": {
                background: `linear-gradient(to right, ${gradient})`,
            },
        }}
        style={{ width: "100%" }}
    />
}


