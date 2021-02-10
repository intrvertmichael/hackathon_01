import './index.css'
import Castle from './castle.png'

const WorldPath = ({setCurrentPage, currentLevel}) => {

    const onStyle = { background: '#BAA482' }
    const offStyle = { background: '#D69760' }

    let onPathWidth
    let offPathWidth
    let characterPos

    if( currentLevel === 1 ){
        onPathWidth = { width:"0%" }
        offPathWidth = { width:"100%" }
        characterPos = { left:"calc(0% - 30px)" }

    } else if( currentLevel === 2 ){
        onPathWidth = { width:"25%" }
        offPathWidth = { width:"75%" }
        characterPos = { left:"calc(25% - 40px)" }

    } else if( currentLevel === 3 ){
        onPathWidth = { width:"50%" }
        offPathWidth = { width:"50%" }
        characterPos = { left:"calc(50% - 50px)" }

    } else if( currentLevel === 4 ){
        onPathWidth = { width:"75%" }
        offPathWidth = { width:"25%" }
        characterPos = { left:"calc(75% - 50px)" }

    } else if( currentLevel === 5 ){
        onPathWidth = { width:"100%" }
        offPathWidth = { width:"0%" }
        characterPos = { left:"calc(100% - 60px)" }

    }

    return (
        <div className='world-path nes-container is-dark with-title'>

            <div className='character-position'>
                <img className='castle' src={Castle} alt="castle"/>

                <i
                    className="player nes-octocat animate"
                    style={characterPos}
                />
            </div>

            <div className='path-wrapper'>
                <div className='path-milestone'
                    style={ currentLevel >= 1 ? offStyle : onStyle }
                />
                <div className='path-milestone'
                    style={ currentLevel >= 2 ? offStyle : onStyle }
                />
                <div className='path-milestone'
                    style={ currentLevel >= 3 ? offStyle : onStyle }
                />
                <div className='path-milestone'
                    style={ currentLevel >= 4 ? offStyle : onStyle }
                />
                <div className='path-milestone'
                    style={ currentLevel >= 5 ? offStyle : onStyle }
                />

                <div className='path' style={onPathWidth} />
                <div className='path-left' style={offPathWidth} />
            </div>

            <div className='path-labels'>
                <div className='path-label'> Types </div>
                <div className='path-label'> Variables </div>
                <div className='path-label'> Arrays </div>
                <div className='path-label'> Functions </div>
                <div className='path-label'> Final </div>
            </div>

            <button
                className={'nes-btn is-success'}
                onClick={ () => setCurrentPage(2) }
            > LET'S DO IT ! </button>

        </div>
    )
}

export default WorldPath