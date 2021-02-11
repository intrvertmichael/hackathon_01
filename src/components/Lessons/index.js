import './index.css'

import Lesson1 from './All/Lesson_1'
import Lesson2 from './All/Lesson_2'
import Lesson3 from './All/Lesson_3'
import Lesson4 from './All/Lesson_4'
import Lesson5 from './All/Lesson_5'

const Lessons = props => {

    const {currentLevel} = props

    return (
        <div className={'lessons nes-container'}>

            {
                currentLevel === 1?
                <Lesson1 {...props} />
                : ''
            }
            {
                currentLevel === 2?
                <Lesson2 {...props} />
                : ''
            }
            {
                currentLevel === 3?
                <Lesson3 {...props} />
                : ''
            }
            {
                currentLevel === 4?
                <Lesson4 {...props} />
                : ''
            }
            {
                currentLevel === 5?
                <Lesson5 {...props} />
                : ''
            }

        </div>
    )
}

export default Lessons