import { DetailsContainer } from "./styleDetails";
import { useParams } from "react-router-dom";

export const Details = () => {

    const pathParams = useParams();
    console.log(pathParams.id)
    
    return (
        <DetailsContainer>

        </DetailsContainer>
    )
}