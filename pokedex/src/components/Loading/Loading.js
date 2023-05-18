import gifPokeball from "../../assets/gifs/gif_pokeball.gif"


export const Loading = () => {

    return(
        <main style={{width: "100vw", height: "88vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <img src={gifPokeball} alt="pokeball girando"/>
        </main>
    )
}