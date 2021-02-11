
import {useEffect, useRef, useState} from 'react'
import './index.css'
import './syntaxHighlighting.css'

import handleRegex from './handleRegex'

const Editor = ({currentLevel, setCurrentLevel, setCurrentPage, wordLimit, checkAnswer}) => {

    const [inputValue, setInputValue] = useState()
    const [outputValue, setOutputValue] = useState()
    const [caretPos, setCaretPos] = useState()
    const [answerIsCorrect, setAnswerIsCorrect] = useState()
    const textInput = useRef(null);

    // setting the position of the caret
    useEffect( () => {
        const pos = caretPos + 3
        textInput.current.setSelectionRange(pos,pos)
    }, [textInput, caretPos])

    // creating HTML in output
    const createMarkup = () => {
        if(outputValue){
            return {__html: outputValue}
        } else {
            return {__html: 'Enter code here'}
        }
    }

    // checking if submitted code is correct
    const handleCodeSubmit = e => {
        var objDiv = document.querySelector(".lessons");
        objDiv.scrollTop = objDiv.scrollHeight;
        setAnswerIsCorrect( checkAnswer(inputValue) )
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
                    onClick={handleCodeSubmit}
                > submit </button>

            </div>

            {
                <div className="output-wrapper">

                {
                    answerIsCorrect === true ?
                    <>
                        <> That is correct ! </>

                        {
                            currentLevel === 5?
                            <button
                            className={"nes-btn is-success"}
                            onClick={ () => setCurrentPage(3) }
                            > all done ! </button>
                            :
                            <button
                            className={"nes-btn is-success"}
                            onClick={ () => {
                                setCurrentLevel(currentLevel + 1)
                                setCurrentPage(1)
                            } }
                            > next level </button>
                        }

                    </>
                    :
                    ""
                }

                {
                    answerIsCorrect === false?
                    <> Please try again </>
                    :
                    ""
                }

                </div>
            }

        </div>
)}

// highglighting the input text
const highlight = (e, setOutputValue) => {
    let formattedText = handleRegex(e.target.value)
    setOutputValue(formattedText)
}

export default Editor