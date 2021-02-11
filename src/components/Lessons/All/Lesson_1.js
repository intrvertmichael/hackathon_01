
import './Lesson_1.css'
import Editor from '../../Editor'

import {isThisAString, isThisANumber} from './checkers'

const Lesson1 = ({setCurrentPage, setCurrentLevel, currentLevel, userName, setUserName}) => {
    return (
        <>

            <h1> Lesson 1 <br/> Primitive Types </h1>

            <p>
                There are 7 primitive types in Javascript. This just means 7 different ways we can represent information. We will start with the simplest 3: <span className='string'>strings</span>, <span className='number'>numbers</span>, <span className='boolean'>booleans</span>
            </p>
            <p>
                A <span className='number'>number</span> is ... well, a <span className='number'>number</span>. <br/>
                Any <span className='number'>number</span> wether it is a whole <span className='number'>number</span> or decimal point.
            </p>
            <p>
                A <span className='string'>string</span> is the first time in programming you will start seeing funny words to represent something.
            </p>
            <p>
                A <span className='string'>string</span> is basically letters. But not just letters it can also be a word. But not only a word it can also be a sentence. But not just a sentence it can also be a number or symbol. A <span className='string'>string</span> is just a representation of characters that are treated as text.
            </p>
            <p>
                We let our program know we want to use a <span className='string'>string</span> by sorrounding our text with single (' ') or double quotes (" ").
            </p>
            <p>
                Let me give you an example to try to make this a little more clear:
            </p>
            <p>
                lets say we use the <span className='number'>number</span> 1, <br/>
                then 1 + 1 = 2 <br/>
                BUT if we use “1” as a <span className='string'>string</span>, <br/>
                then “1”+”1”= “11” <br/>
            </p>
            <p>
                With <span className='number'>numbers</span> the + symbol will add the numbers together. With <span className='string'>strings</span> the + symbol will put 2 words together.
            </p>
            <p>
                A <span className='boolean'>boolean</span> just tells us wether something is true or false. This can be very helpful later on to let us know if things should happen when something is true or when something is false.
            </p>
            <p className='challenge'>
                Now we have reached our first challenge !
            </p>
            <p>
                In the code editor below enter a string, then a number, then the word true, seperated by spaces.
            </p>
            <p>
                Don't forget to pay attention to everything that's needed to let our program know what we want to tell it.
            </p>

            <Editor
                setCurrentPage={setCurrentPage}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}

                wordLimit={50}
                checkAnswer={ submitted => {
                    if(!submitted) return false

                    const submittedArray = submitted.split(/\s+/)

                    const check1 = isThisAString(submittedArray[0])
                    const check2 = isThisANumber(submittedArray[1])
                    const check3 = submittedArray[2] === "true"

                    // make sure everything is true
                    const final =  check1 && check2 && check3
                    return final

                }}
            />
        </>
    )
}

export default Lesson1