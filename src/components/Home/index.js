
import {useRef, useState} from 'react'
import './index.css'

const Home = ({setCurrentPage}) => {
    const [playing, setPlaying] = useState(false)
    const [timer, setTimer] = useState(false)

    const coinDiv = useRef(null)

    return (
        <div className='home nes-container is-dark'>
            <h1>
                <button className='nes-btn is-warning' onClick={ e => {

                    const on = () => {

                        setPlaying(true)
                        setTimeout( () => {
                            console.log("animation is on")
                            coinDiv.current.classList.add('coin-animation')
                        }, 1 )

                        setTimer(setTimeout( () => {
                            console.log("animation is off")
                            coinDiv.current.classList.remove('coin-animation')
                            setPlaying(false)
                        }, 1000 ))

                    }

                    const clearOff = () => {

                        clearTimeout(timer)
                        coinDiv.current.classList.remove('coin-animation')
                        on()

                    }

                    if(playing){
                        clearOff()
                    } else {
                        on()
                    }

                }}>
                    <div className='coin' ref={coinDiv} />
                    JS
                </button>
                <span className='title'>World</span>
            </h1>

            <p>
                A game to learn the basics of Javascript
            </p>

            <button
                className='start-button nes-btn'
                onClick={ () => setCurrentPage(1) }
            > Start </button>
        </div>
    )
}

export default Home