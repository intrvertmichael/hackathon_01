import Editor from '../../Editor'
import {checkMyFavorites} from './checkers'
const Lesson5 = ({setCurrentPage, setCurrentLevel, currentLevel}) => {
    return (
        <>
            <h1> Lesson 5 <br/> Final </h1>

            <p>
                Wow ! That's crazy ! Can't believe you made it all the way to the end. Not too much talking here let's just put all of our knowledge together and finish up this short journey.
            </p>
            <p className='challenge'>
                So close !
            </p>
            <p>
                Let's write a function called myFavorites that will return an array of all of your favorite stuff. Make sure you call the function after you write it out.
            </p>

            <Editor
                setCurrentPage={setCurrentPage}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}

                wordLimit={200}
                checkAnswer={ submitted => checkMyFavorites(submitted) }
            />
        </>
    )
}

export default Lesson5