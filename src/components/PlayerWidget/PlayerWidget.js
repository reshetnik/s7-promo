import * as React from "react"

import MiniPlay from '../../assets/play.svg';
import Arrow from '../../assets/arrow.svg';

import './style.scss';
import PlayerControls from "../PlayerControls/PlayerControls";

const PlayerWidget = ({ podcast, index, total, isPlaying, onNext, onPrev, onPlay }) => {

  return (
    <div className="playerContainer" >
      <div className="player-main" style={{ backgroundColor: podcast?.color }}>
        <div className="cover" style={
          {
            backgroundImage: `url(${podcast?.cover})`,
            backgroundColor: podcast?.color
          }}>
          <div className="counter">
            <div className="big">
              # {index}
            </div>
            <div className="right">
              /  {total}
            </div>
          </div>

          <PlayerControls isPlaying={isPlaying} onNext={onNext} onPrev={onPrev} onPlay={onPlay} />

        </div>
        <div className="info" style={{ backgroundColor: podcast?.color }}>
          <div className="time">

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
