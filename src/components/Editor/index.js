import {useRef, useState} from 'react'
import './index.css'
import './syntaxHighlighting.css'

import regexReplacements from './regexReplacements'

const Editor = props => {
    const [outputValue, setOutputValue] = useState("")
    const textInput = useRef(null);

    // tab feature still needs to be fixed

    const createMarkup = () => {
        return {__html: outputValue};
    }

    return (
        <div className="code-editor">
            <div className="textarea-wrapper">
                <textarea
                    ref={textInput}
                    className="input"
                    autoCorrect="off"
                    autoCapitalize="none"
                    spellCheck="false"
                    placeholder="Enter code here"
                    onKeyDown={ e => {
                        if(e.keyCode === 9 || e.key === "Tab"){
                            e.preventDefault()
                            const spaces = "   "
                            const curPos = textInput.selectionStart
                            const textValue = textInput.value

                            textInput.value = textValue.slice(0,curPos) + spaces + textValue.slice(curPos)
                            textInput.selectionEnd = curPos + 3
                        }
                    }}
                    onKeyUp={ e => highlight(e, setOutputValue) }
                />

                <div className="textarea-output" dangerouslySetInnerHTML={createMarkup()} />
            </div>
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

            // when trying to highlight array
            // square brackets need to be escaped

            arr.forEach( found => {
                const word = found.substring(1, found.length - 1)
                const regex = new RegExp( '\\'+rep.code[0]+word+'\\'+rep.code[1]  , 'g')
                const newElem = `<span class=${rep.name}>${found}</span>`
                allText = allText.replace(regex , newElem) 
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