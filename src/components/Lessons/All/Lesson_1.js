import Editor from '../../Editor'

const Lesson1 = ({setCurrentPage, setCurrentLevel, currentLevel}) => {
    return (
        <>
            <h1> Lesson 1 </h1>

            <p>
                This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this.
            </p>

            <img src='https://media.giphy.com/media/NKEt9elQ5cR68/giphy.gif' alt='gif' />

            <p>
                This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this.
            </p>

            <img src='https://media.giphy.com/media/NKEt9elQ5cR68/giphy.gif' alt='gif' />

            <p>
                This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this.
            </p>

            <img src='https://media.giphy.com/media/NKEt9elQ5cR68/giphy.gif' alt='gif' />

            <p>
                This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this.
            </p>

            <Editor
                setCurrentPage={setCurrentPage}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}
            />

            <p>
                This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this. This is a lesson it would go something like this.
            </p>
        </>
    )
}

export default Lesson1