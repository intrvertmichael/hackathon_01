import {useEffect, useRef, useState} from 'react'
import './index.css'
import './syntaxHighlighting.css'

import regexReplacements from './regexReplacements'

const Editor = props => {
    const [inputValue, setInputValue] = useState()
    const [outputValue, setOutputValue] = useState()
    const [submitted, setSubmitted] = useState()
    const [caretPos, setCaretPos] = useState()
    const textInput = useRef(null);

    useEffect( () => {
        const pos = caretPos + 3
        textInput.current.setSelectionRange(pos,pos)
    }, [textInput, caretPos])


    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // prop defaults
    const wordLimit = 200
    const correctAnswer = "hello world"

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    const createMarkup = () => {
        return {__html: outputValue};
    }

    const handleNextLevelClick = () => {
        console.log("next level clicked")
    }

    return (
        <div className="code-editor">
            <div className="input-wrapper">
                <textarea
                    ref={textInput}
                    className="input"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck="false"
                    maxLength={wordLimit}
                    placeholder="Enter code here"
                    onChange={ e => setInputValue(e.target.value)}
                    onKeyDown={ e => {
                        if(e.keyCode === 9 || e.key === "Tab"){
                            e.preventDefault()

                            const spaces = "   "
                            const currentCaretPos = e.target.selectionStart
                            setCaretPos(e.target.selectionStart)

                            setInputValue(
                                inputValue.slice(0,currentCaretPos)
                                + spaces
                                + inputValue.slice(currentCaretPos)
                            )
                        }
                    }}
                    onKeyUp={ e => highlight(e, setOutputValue) }
                    value={inputValue}
                />

                <div className="textarea-output" dangerouslySetInnerHTML={createMarkup()}/>

                <button
                    className='submit-code'
                    onClick = { e => {

                        let result

                        try {
                            // eslint-disable-next-line no-eval
                            result = global.eval(inputValue)
                        }
                        catch(error) {
                            console.log(error)
                        }

                        if(result){
                            setSubmitted( result )
                        } else {
                            setSubmitted("Please try again")
                        }
                    }}
                > submit </button>
            </div>

            {
                submitted?
                <div className="output-wrapper">
                    {submitted}

                    {
                        submitted === correctAnswer ?
                        <button className={"nes-btn is-success"} onClick={handleNextLevelClick}> next level </button>
                        :
                        ""
                    }
                </div>
                :
                ""
            }

        </div>
)}

const highlight = (e, setOutputValue) => {

    let allText = e.target.value

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

    setOutputValue(allText)

}

export default Editor