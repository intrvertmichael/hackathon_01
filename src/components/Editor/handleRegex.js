import regexReplacements from './regexReplacements'

const handleRegex = (allText) => {
        const replacements = regexReplacements()

        replacements.forEach( rep => {

            if(rep.multiple){

                // some regex matches return an array
                // need to replace each match individually

                const arr = allText.match(rep.regex)
                const isArray = arr && arr.length > 0

                if( (rep.name === "array" || rep.name === "function") && isArray){

                    // when trying to highlight array or function
                    // wrapper symbols need to be escaped

                    arr.forEach( found => {
                        const strippedWord = found.substring(1, found.length - 1)
                        const formattedRegex = '\\' + rep.code[0] + strippedWord + '\\' + rep.code[1]

                        const createRegex = new RegExp( formattedRegex , 'g')
                        const createNewElem = `<span class=${rep.name}>${found}</span>`

                        allText = allText.replace(createRegex , createNewElem)
                    })

                } else if(isArray){
                    arr.forEach( found => {
                        const regex = new RegExp(`${found}`, 'g')
                        const newElem = `<span class=${rep.code}>${found}</span>`
                        allText = allText.replace(regex , newElem)
                    })

                }
            }  else {

                allText = allText.replace( rep.regex , rep.code)

            }
        })

        return allText
}

export default handleRegex