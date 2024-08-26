import * as React from "react"

import MiniPlay from '../../assets/play.svg';
import Arrow from '../../assets/arrow.svg';

import './style.scss';
import PlayerControls from "../PlayerControls/PlayerControls";
import PODCASTS from "./podcasts";

const PlayerWidget = ({ podcastIndex, changeIndex }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const audio = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      return new Audio(PODCASTS[podcastIndex].link);
    }
    return null;
  }, [podcastIndex]);

  const podcast = React.useMemo(() => {
    return PODCASTS[podcastIndex]
  }, [podcastIndex])

  const handlePlay = () => {
    if (!isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }

    setIsPlaying(!isPlaying);
  }

  const handlePrev = () => {
    audio.pause();
    setIsPlaying(false);

    if (podcastIndex > 0) {
      changeIndex(podcastIndex - 1);
    }
  }

  const handleNext = () => {
    audio.pause();
    setIsPlaying(false);

    if (podcastIndex < PODCASTS.length - 1) {
      changeIndex(podcastIndex + 1);
    }
  }

  const bgColor = podcast?.isEnabled ? '#9EC600' : '#C2C3C3';

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
              # {podcastIndex + 1}
            </div>
            <div className="right">
              /  {PODCASTS.length}
            </div>
          </div>

          <PlayerControls isPlaying={isPlaying} onNext={handleNext} onPrev={handlePrev} onPlay={handlePlay} isEnabled={podcast?.isEnabled} />


        </div>
        <div className="info" style={{ backgroundColor: bgColor }}>
          <div className="time">
            {!podcast?.isEnabled && `(выйдет ${podcast?.release})`}
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
