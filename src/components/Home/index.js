import './index.css'

const Home = ({setCurrentPage}) => {
    return (
        <div className='home nes-container is-dark'>
            <h1>
                <span className='nes-btn is-warning'>JS</span>
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