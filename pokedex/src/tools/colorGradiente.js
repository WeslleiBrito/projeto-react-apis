
export const colorGradientFinaly = ({ multiplierFactor, colorInitial, colorFinaly }) => {

    console.log(multiplierFactor)
    const redFinaly = (((colorFinaly[0] - colorInitial[0]) / 100) * multiplierFactor) + colorInitial[0]
    const greenFinaly = (((colorFinaly[1] - colorInitial[1]) / 100) * multiplierFactor) + colorInitial[1]
    const blueFinaly = (((colorFinaly[2] - colorInitial[2]) / 100) * multiplierFactor) + colorInitial[2]


    return `rgb(${colorInitial[0]}, ${colorInitial[1]}, ${colorInitial[2]}), rgb(${redFinaly}, ${greenFinaly}, ${blueFinaly})`
}

