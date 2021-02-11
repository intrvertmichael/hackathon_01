import Editor from '../../Editor'
import './Lesson_4.css'

import {checkFavoriteWebsite} from './checkers'

const Lesson4 = ({setCurrentPage, setCurrentLevel, currentLevel}) => {
    return (
        <>
            <h1> Lesson 4 <br/> Functions </h1>

            <p>
                When programming you usually don't just want to save data. Usually you want to do something with that data in a program. What some programs can do can be very complex and amazing. But all programs start from these basics. <span className='function'>Functions</span> are a type of code that can do things. Let me show you what a function looks like then I will explain each part of it.
            </p>

            <span className='code'>
                <span className='variable'>const</span> greeting <span className='function'>{'= () => {'}</span> <br/>
                &nbsp; &nbsp; <span className='statement'>return</span> <span className='string'>"hello world"</span> <br/>
                <span className='function'>}</span>
            </span>

            <p>
                A <span className='function'>function</span> starts off being defined just like a <span className='variable'>variable</span> using the keyword const since we don't want the function to accidentally be overwritten.
            </p>
            <p>
                After the start <span className='variable'>variable</span> definition we then include the arguments paranthesis. Arguments are any data that we want to send to this <span className='function'>function</span> in order to do something with it. In this example we do not have any arguments inside of the paranthesis, so we just use the empty paranthesis. If there was an argument we would put the name of the <span className='variable'>variable</span> that is holding the argument. Let's say for example that we wanted to customize this function to say any greeting that we send to the <span className='function'>function</span>. Then inside of the arguments parenthesis we would put a <span className='variable'>variable</span> name, for example: userHello, and then that <span className='variable'>variable</span> can be used in any way inside of the <span className='function'>function</span>. that <span className='function'>function</span> with an argument would look like this:
            </p>

            <span className='code'>
                <span className='variable'>const</span> greeting <span className='function'>{'= (sayHello) => {'}</span> <br/>
                &nbsp; &nbsp; <span className='statement'>return</span> <span className='string'>"hello world"</span> <br/>
                <span className='function'>}</span>
            </span>

            <p>
                Now we know what the first parts of a <span className='function'>function</span> mean. Now we move on to the actual <span className='function'>function</span> definition. The part that is different than from just defining a <span className='variable'>variable</span>. This part starts with the arrow symbol or {"=>"} this is the main symbol you will see that will show you that what you are looking at is a <span className='function'>function</span>. This tells you that this is where the <span className='function'>function</span> is beginning. Then the open curly brace or {"{"} states that this is the start of a <span className='function'>function</span>. Anything that comes after this symbol is the actual <span className='function'>function</span> being written. Once again a <span className='function'>function</span> is a type of code that will do something.
            </p>
            <p>
                In this case inside of the <span className='function'>function</span> all we are doing is returning the <span className='string'>string</span> "hello world".
            </p>
            <p>
                You might ask yourself "returning where?" and this brings up a good and important fact about <span className='function'>function</span>. <span className='function'>Function</span> need to be made in 2 steps. They must first be created or defined. Then they must be called. The way we call a <span className='function'>function</span> is by writting the name of the <span className='function'>function</span> followed by parenthesis. Inside of the parenthesis is where the arguments will go. In the first <span className='function'>function</span> we do not have any arguments so the parenthesis following the <span className='function'>function</span> name will be empty. If there was an argument that needed to be sent to this <span className='function'>function</span> then it would have to be placed inside of these parenthesis. Bellow I will give an example of both:
            </p>
            <span className='code'>
                <span className='function'> greeting() </span>
            </span>
            <span className='code'>
                <span className='function'> greeting(<span className='string'>'bonjour'</span>) </span>
            </span>
            <p>
                To wrap up our <span className='function'>function</span> definition we need to close the <span className='function'>function</span> using the closing curly brace or {"}"}. We CAN NOT forget the closing brace. This is the final piece to contain this block of code to do whatever we need to. In the end our full function definition will be as follows:
            </p>
            <span className='code'>
                <span className='variable'>const</span> greeting <span className='function'>{'= () => {'}</span> <br/>
                &nbsp; &nbsp; <span className='statement'>return</span> <span className='string'>"hello world"</span> <br/>
                <span className='function'>}</span> <br/>
                greeting<span className='function'>()</span>
            </span>
            <p>
                Calling this <span className='function'>function</span> will return the greeting we are expecting which is "hello world"
            </p>
            <p>
                Now as you can see <span className='function'>function</span> can be very complex and hard to understand when you first start. I felt the need to add all this explanation because eventhough they are very tricky they can be very powerful if you understand them fully. This will be the main tool that will allow you to do many great things. In fact there is a whole style of programming based on <span className='function'>functions</span> called functional programming. But that is much more advanced then our current journey but if we keep on we will get there one day.
            </p>
            <p className='challenge'>
                We are getting so good ! I am so proud of you for getting this far ! You got this challenge !
            </p>
            <p>
                Using all of our new knowledge about functions let's write up a function named getFavoriteWebsite that will return a string with your favorite website (reddit, twitter, facebook, instagram, or github). <br/>
                Don't forget to close your function and call it after you write it !
            </p>
            <div className='icons'>
                <i className="nes-icon reddit is-large"></i>

                <i className="nes-icon twitter is-large"></i>

                <i className="nes-icon facebook is-large"></i>

                <i className="nes-icon instagram is-large"></i>

                <i className="nes-icon github is-large"></i>
            </div>

            <Editor
                setCurrentPage={setCurrentPage}
                setCurrentLevel={setCurrentLevel}
                currentLevel={currentLevel}

                wordLimit={200}
                checkAnswer={ submitted => checkFavoriteWebsite(submitted) }
            />
        </>
    )
}

export default Lesson4