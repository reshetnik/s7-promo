
import * as React from "react"
import './style.scss';
import PlayIcon from '../../assets/play-button.svg';
import PauseIcon from '../../assets/pause-small.svg';

const PlayButton = ({ isPlaying, onPlay }) => {
  return (
    <div>
      {isPlaying ? <PauseIcon onClick={onPlay} className='play-icon' /> :
        <PlayIcon onClick={onPlay} className='play-icon' />}
    </div>
  )
}

export default PlayButton;
