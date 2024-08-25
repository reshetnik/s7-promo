
import * as React from "react"
import './style.scss'

import Play from './assets/play.svg';
import Prev from './assets/prev.svg';
import Next from './assets/next.svg';
import Pause from './assets/pause.svg';

const PlayerControls = ({ isPlaying, onPlay, onPause, onNext, onPrev }) => {
  return (
    <div className="player-controls">
      <Prev className='control' onClick={onPrev} />
      {isPlaying ? <Pause className='control' onClick={onPlay} /> : <Play className='control' onClick={onPlay} />}
      <Next className='control' onClick={onNext} />
    </div>
  )
}

export default PlayerControls;
