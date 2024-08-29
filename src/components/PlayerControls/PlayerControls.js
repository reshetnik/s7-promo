
import * as React from "react"
import './style.scss'

import Play from './assets/play.svg';
import Prev from './assets/prev.svg';
import Next from './assets/next.svg';
import Pause from './assets/pause.svg';
import PlayTime from './assets/play-time.svg';


const PlayerControls = ({ isPlaying, onPlay, onNext, onPrev, isEnabled, isFirst }) => {
  return (
    <div className="player-controls">
      {!isFirst && <Prev className='control' onClick={onPrev} />}

      {!isEnabled ? <PlayTime className='control plug' /> :

        isPlaying ? <Pause className='control' onClick={onPlay} /> : <Play className='control' onClick={onPlay} />}
      {isEnabled && <Next className='control' onClick={onNext} />}
    </div>
  )
}

export default PlayerControls;
