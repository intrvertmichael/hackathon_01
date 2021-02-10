import './index.css'

import Lesson1 from './All/Lesson_1'
import Lesson2 from './All/Lesson_2'
import Lesson3 from './All/Lesson_3'
import Lesson4 from './All/Lesson_4'
import Lesson5 from './All/Lesson_5'

const Lessons = ({setCurrentPage, setCurrentLevel, currentLevel}) => {
    return (
        <div className={'lessons nes-container'}>

            {
                currentLevel === 1?
                <Lesson1 {...{setCurrentPage, setCurrentLevel, currentLevel}} />
                : ''
            }
            {
                currentLevel === 2?
                <Lesson2 {...{setCurrentPage, setCurrentLevel, currentLevel}} />
                : ''
            }
            {
                currentLevel === 3?
                <Lesson3 {...{setCurrentPage, setCurrentLevel, currentLevel}} />
                : ''
            }
            {
                currentLevel === 4?
                <Lesson4 {...{setCurrentPage, setCurrentLevel, currentLevel}} />
                : ''
            }
            {
                currentLevel === 5?
                <Lesson5 {...{setCurrentPage, setCurrentLevel, currentLevel}} />
                : ''
            }

        </div>
    )
}

export default Lessons