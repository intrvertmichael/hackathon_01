import './index.css'

const End = ({userName}) => {

    return (
        <div className='end nes-container  is-rounded is-dark'>

            <h1>
                The End
            </h1>

            <i className="nes-icon trophy is-large"></i>

            <p>
                Congratulations {userName? userName.toUpperCase(): ''}!
            </p>

            <p>
                Learning javascript is not a destination, it's a journey
            </p>

            <p>
                Every great journey starts with a small step. So DON'T stop !
            </p>

            <p>
                Keep growing and you will be making cool things that can help make the world be a little better
            </p>

            <i className="nes-icon heart"></i>

        </div>
    )
}

export default End