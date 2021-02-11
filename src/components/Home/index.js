
import {useRef} from 'react'
import './index.css'

const Home = ({setCurrentPage}) => {

    const coinDiv = useRef(null)

    return (
        <div className='home nes-container is-dark'>
            <h1>
                <button className='nes-btn is-warning' onClick={ e => {

                    let animationOn
                    const on = () => {
                        animationOn = setTimeout( () => {
                            coinDiv.current.classList.add('coin-animation')
                        }, 10 )
                    }

                    let animationOff
                    const off = () => {
                        animationOff = setTimeout( () => {
                            coinDiv.current.classList.remove('coin-animation')
                        }, 1000 )
                    }

                    const clearOn = () => {
                        clearTimeout(animationOn);
                    }

                    const clearOff = () => {
                        clearTimeout(animationOff);
                    }

                    clearOn()
                    clearOff()

                    off()
                    on()
                    off()

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