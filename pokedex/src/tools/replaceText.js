export const replaceText = (text, firstUpperCase, space) => {
    const regex = /[a-z]/i
    const textArray = text.split("")
    let uppercase = false
  
    const textClean = textArray.map((caracter, index) => {
  
  
      if (regex.test(caracter)) {
  
        const letter = ((uppercase || index === 0) & firstUpperCase) || (uppercase & !firstUpperCase) ? caracter.toUpperCase() : caracter
        uppercase = false
        return letter
      }
  
      uppercase = true
      return space ? " " : ""
  
    })
  
    return textClean.toString().replaceAll(",", "")
  }