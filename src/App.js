
import {useState} from 'react'
import './App.css';
import End from './components/End';

import Home from './components/Home';
import Lessons from './components/Lessons';
import WorldPath from './components/WorldPath'

function App() {
  const [currentPage, setCurrentPage] = useState(0) // 0 - 2
  const [currentLevel, setCurrentLevel] = useState(1) // 1 - 5

  const [userName, setUserName] = useState() // users name

  return (
    <div className="App">
      {
        currentPage === 0 ?
        <Home setCurrentPage={setCurrentPage} />
        : ''
      }

      {
        currentPage === 1 ?
        <WorldPath
          setCurrentPage={setCurrentPage}
          currentLevel={currentLevel}
        />
        : ''
      }

      {
        currentPage === 2 ?
        <Lessons
          setCurrentPage={setCurrentPage}
          setCurrentLevel={setCurrentLevel}
          currentLevel={currentLevel}
          userName={userName}
          setUserName={setUserName}
        />
        : ''
      }

      {
        currentPage === 3 ?
        <End userName={userName} />
        : ''
      }

    </div>
  )
}

export default App;