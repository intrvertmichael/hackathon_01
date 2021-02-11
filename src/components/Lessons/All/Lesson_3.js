import Editor from '../../Editor'
import './Lesson_3.css'

import {checkPokemonArray} from './checkers.js'

const Lesson3 = ({setCurrentPage, setCurrentLevel, currentLevel}) => {

    const pokeballEl = <span className='string'>'pokeball'</span>
    const bulbasaurEl = <span className='string'>'bulbasaur'</span>

    return (
        <>
            <h1> Lesson 3 <br/> Arrays </h1>

            <p>
                Sometimes it's not enough to save one thing in a <span className='variable'>variable</span>. Sometimes we need to save a list of things in a <span className='variable'>variable</span>. This is when <span className='array'>arrays</span> come into play. <span className='array'>Arrays</span> are a list of data that can be used in many ways. Here we will just learn about them and how to access the data inside.
            </p>
            <p>
                An <span className='array'>array</span> is created by wrapping a list of comma seperated items with square brackets. The items in an array can be mixed. Arrays can be used for to do lists, list of phone numbers, or to keep track of a certain order. Here is an example:
            </p>
            <p className='code'>
                <span className='array'>
                    [
                    <span className='string'>'a'</span>,
                    <span className='number'>1</span>,
                    <span className='boolean'>true</span>
                    ]
                </span>
            </p>
            <p>
                You may ask yourself, how do I get the things in the <span className='array'>Arrays</span> ? Well, to get these items we have to write the name of the <span className='variable'>variable</span> holding the array, then we have to use the square brackets and the number of the index of the item in the array.
            </p>
            <p>
                Okay that sounds a little complicated. But I promise you will get this. Let's try an example:
            </p>
            <p className='code'>
                <span className='variable'>const</span> letters =
                <span className='array'>
                    [
                    <span className='string'>'a'</span>,
                    <span className='string'>'b'</span>,
                    <span className='string'>'c'</span>,
                    <span className='string'>'d'</span>
                    ]
                </span>
            </p>
            <p>
                here we have an <span className='array'>array</span> named letters. All <span className='array'>arrays</span> start with a 0 index. The index is just a fancy way of saying the position. so in index 0 of the letters array we have the letter "a", another way to say this is letters[0] equals "a". In index 1 we have the letter "b", in letters[3] we have the letter "d"
            </p>
            <p className='challenge'>
                Let's try another challenge now !
            </p>
            <p className='array-challenge'>
                [
                <i className="nes-pokeball"></i>,
                <i className="nes-pokeball"></i>,
                <i className="nes-bulbasaur"></i>,
                <i className="nes-pokeball"></i>,
                <i className="nes-pokeball"></i>
                ]
            </p>

            <div className='code'>
                <span className='variable'>const</span> pokemon = <span className='array'>[ {pokeballEl}, {pokeballEl}, {bulbasaurEl}, {pokeballEl}, {pokeballEl} ]</span>
            </div>

            <p>

                Here we have an array of pokeballs with a bulbasaur in the middle. How would we get the bulbasaur if the name of the array was pokemon.
            </p>

            <Editor
                setCurrentPage={setCurrentPage}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}

                wordLimit={10}
                checkAnswer={ submitted => {
                    if(!submitted) return false
                    return checkPokemonArray(submitted)
                }}
            />
        </>
    )
}

export default Lesson3