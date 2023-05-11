
export const goHome = (navigate) => {
    navigate('/')
}

export const goDetails = (navigate, id) => {
    navigate(`/details/${id}`)
}

export const goPokedex = (navigate) => {
    navigate('/pokedex')
}
export const goPreviousPage = (navigate) => {
    navigate(-1)
}