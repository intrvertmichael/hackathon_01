export const isThisAString = possible => {
    const singleQuotesRegex = /('([^']|'')*')/g
    const doubleQuoteRegex = /("([^"]|"")*")/g

    const hasSingle = singleQuotesRegex.test(possible)
    const hasDouble = doubleQuoteRegex.test(possible)

    return (hasSingle || hasDouble)
}

export const isThisANumber = possible => {
    const possibleNumber = Number(possible)
    const isNumber =  !isNaN(possibleNumber)

    return isNumber
}


export const checkNameVariable = possible => {

    // checks start
    const startsWithText = ['const', 'name', '=']
    const submittedArray = possible.trim().split(/\s+/)

    let startsTheSame = true
    for(let i= 0 ; i < startsWithText.length ; i++){
        const compare = startsWithText[i] === submittedArray[i]
        if(compare === false) startsTheSame = false
    }

    // checks end string
    const lastWord = submittedArray[ submittedArray.length - 1 ]

    const singleQuotesRegex = /('([^']|'')*')/g
    const doubleQuoteRegex = /("([^"]|"")*")/g

    const hasSingle = singleQuotesRegex.test(lastWord)
    const hasDouble = doubleQuoteRegex.test(lastWord)

    // make sure everything is true
    const final = (hasSingle || hasDouble) && startsTheSame
    return final
}

export const checkPokemonArray = possible => {
    return possible === 'pokemon[2]'
}

export const checkFavoriteWebsite = possible => {

    const websites = ["reddit", "twitter", "facebook", "instagram", "github"]

    const submittedJoined = possible.trim().split(/\s+/).join("")
    const hasCorrectName = submittedJoined.startsWith('constgetFavoriteWebsite=()=>{return')

    try {
        // eslint-disable-next-line no-eval
        const result = eval(possible)
        const final = websites.includes(result.toLowerCase()) && hasCorrectName
        return final
    }
    catch(error) {
        console.log(error)
        return false
    }
}

export const checkMyFavorites = possible => {
    console.log('checking favorites')

    const submittedJoined = possible.trim().split(/\s+/).join("")
    const hasCorrectName = submittedJoined.startsWith('constmyFavorites=()=>{return[')

    try {
        // eslint-disable-next-line no-eval
        const result = eval(possible)
        const checkForArray = Array.isArray(result)
        const final = hasCorrectName && checkForArray
        return final
    }
    catch(error) {
        console.log(error)
        return false
    }
}