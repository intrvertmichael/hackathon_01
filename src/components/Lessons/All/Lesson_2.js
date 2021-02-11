
import Editor from '../../Editor'
import './Lesson_2.css'

import {checkNameVariable} from './checkers'

const Lesson2 = ({setCurrentPage, setCurrentLevel, currentLevel, setUserName}) => {
    return (
        <>
            <h1> Lesson 2 <br/> Variables </h1>

            <p>
                <span className='variable'>Variables</span> are very important in Javascript. They store information of things that we want to keep track of. Much like a box. A box can hold things in it for us, in the same way a variable can hold information in it for us.
            </p>
            <p>
                There are 2 types of variables in Javascript. <br/>
                const <span className='variable'>variables</span> and let <span className='variable'>variables</span>
            </p>
            <p>
                Const <span className='variable'>variables</span> are constant variables. These are variables that CAN NOT be changed. They work really well to keep things safe from being changed accidentally. Const <span className='variable'>variables</span> must be defined when they are created. Since they can not be changed we can never add anything to it or define it later on.
            </p>
            <p>
                To declare a const <span className='variable'>variable</span> you write it out like this: <br/>
                <span className='code'>
                <span className='variable'>const</span> planet = <span className='string'>"earth"</span>
                </span>
                So as we can see here we are telling our code that we are declaring a const <span className='variable'>variable</span> named planet that will hold the <span className='string'>string</span> "earth"
            </p>
            <p>
                Let <span className='variable'>variables</span> are the second type of <span className='variable'>variables</span>. Let <span className='variable'>variables</span> also work like a box. The difference with this kind of variable is that it CAN be changed after it is declared. In fact you can declare the name of the <span className='variable'>variable</span> and give it no value until later on.
            </p>
            <p>
                To declare a let <span className='variable'>variable</span> you write it out like this: <br/>
                <span className='code'>
                <span className='variable'>let</span> currentMonth = <span className='string'>"february"</span>
                </span>
                This time we are telling our code that we are declaring a let <span className='variable'>variable</span> named currentMonth that will hold the <span className='string'>string</span> "february".
            </p>
            <p>
                If you notice I am writting the name of the <span className='variable'>variable</span> pushed together and adding a capital in between. This is called camelCase. Since we can not use spaces in variable names to let our code know it is one name we use capitals where the spaces should be.
            </p>
            <p className='challenge'>
                Time for the second challenge !
            </p>
            <p>
                Let's try creating a constant variable that will hold your name.
            </p>

            <Editor
                setCurrentPage={setCurrentPage}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}

                wordLimit={50}
                checkAnswer={ submitted => {
                    if(!submitted) return false

                    let submittedArray = submitted.split(/\s+/)
                    submittedArray = submittedArray.filter( word => word !== '')

                    const lastWord = submittedArray[submittedArray.length-1]
                    const username = lastWord.substring(1, lastWord.length-1)

                    // console.log(username)
                    setUserName(username)

                    return checkNameVariable(submitted)

                }}
            />
        </>
    )
}

export default Lesson2