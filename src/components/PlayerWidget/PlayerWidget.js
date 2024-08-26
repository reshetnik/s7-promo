import * as React from "react"

import MiniPlay from '../../assets/play.svg';
import Arrow from '../../assets/arrow.svg';

import './style.scss';
import PlayerControls from "../PlayerControls/PlayerControls";

const PlayerWidget = ({ podcast, index, total, isPlaying, onNext, onPrev, onPlay, isEnabled }) => {

  const bgColor = isEnabled ? '#9EC600' : '#C2C3C3';

  return (
    <div className="playerContainer" >
      <div className="player-main" style={{ backgroundColor: bgColor }}>
        <div className="cover" style={
          {
            backgroundImage: `url(${podcast?.cover})`,
            backgroundColor: bgColor
          }}>
          <div className="counter">
            <div className="big">
              # {index}
            </div>
            <div className="right">
              /  {total}
            </div>
          </div>

          <PlayerControls isPlaying={isPlaying} onNext={onNext} onPrev={onPrev} onPlay={onPlay} isEnabled={isEnabled} />

        </div>
        <div className="info" style={{ backgroundColor: bgColor }}>
          <div className="time">
            {!isEnabled && `(выйдет ${podcast?.release})`}
          </div>
          <div className="title">
            {podcast?.title}
          </div>
          <div className="description">
            {podcast?.description}
          </div>
        </div>
      </div>
      <div className="player-footer">
        <div className="container">
          <MiniPlay />
          <span>слушать на любимой платформе</span>
          <Arrow />
        </div>


      </div>
    </div>
  )
}

export default PlayerWidget;
