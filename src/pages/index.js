import * as React from "react";

import './fonts.scss';
import './style.scss';

import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '../assets/logo.svg';
import Odnoklasniki from '../assets/odnoklasniki.svg';
import Tag from '../assets/tag.svg';
import Telegram from '../assets/telegram.svg';
import Vk from '../assets/vk.svg';
import Youtube from '../assets/youtube.svg';
import PlayButton from "../components/PlayButton/PlayButton";
import PlayerWidget from "../components/PlayerWidget/PlayerWidget";
import PODCASTS from "../components/PlayerWidget/podcasts";

const IndexPage = () => {
  const ellipseRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const [podcastIndex, setPodcastIndex] = React.useState(0);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  }

  const handlePrev = () => {
    if (podcastIndex > 0) {
      setPodcastIndex(podcastIndex - 1);
    }
  }

  const handleNext = () => {
    if (podcastIndex < PODCASTS.length - 1) {
      setPodcastIndex(podcastIndex + 1);
    }
  }

  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.7]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 90]); // Rotates from 0 to 360 degrees

  const handleScrollToPlayer = () => document.getElementById('player')?.scrollIntoView()


  return (
    <main className="main">
      <Logo className="logo" />
      <div className="containerFirst" ref={ellipseRef}>
        <div className="imageContainer">
          <img className="image-1" src='image-1.jpg' lazy />
        </div>
        <motion.div className="ellipse" id="ellipse"
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={
            {
              scale: scale,
              rotate: rotate,
            }
          }
        />

        <div className="textContainer">
          <div className="subContainer">
            <Tag className="tag" />

            <div className="title">
              Место по душе
            </div>
            <div className="description">
              Иммерсивное погружение в увлекательные, не туристические маршруты с оттенком личной истории
            </div>
            <div className="play-block">
              <PlayButton onPlay={handleScrollToPlayer} />
              <span >
                начать Слушать подкаст скорее
              </span>
            </div>
          </div>
        </div>
      </div >
      <div className="containerSecond">
        <div className="bg">
          <div className="textContainer">
            <div className="subContainer">
              <div className="title">
                Открываем не только мир, но и себя
              </div>
              <div className="description">
                Вместе с жителем города мы отправимся в путешествие по городу с  неожиданной стороны и  увидим мир глазами не путешественника или эксперта, а человека, который исследует и видит город через свое хобби
              </div>
              <div className="play-block">
                <PlayButton onPlay={handleScrollToPlayer} />
                <span>
                  послушать тизер
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containerThird" id="player">
        <div className="radio">
          <div className="route" style={{
            left: `calc((100% / 2) - ${podcastIndex * 600}px)`,
          }} />

          <PlayerWidget podcast={PODCASTS[podcastIndex]} index={podcastIndex + 1} total={PODCASTS.length} isPlaying={isPlaying} onNext={handleNext} onPrev={handlePrev} onPlay={handlePlay} isEnabled={PODCASTS[podcastIndex].isEnabled} />

        </div>
        <div className="about">
          <img src='ava.png' alt='Ведущий' lazy />
          <div className="block">
            <div className="description">
              Вместе с жителем города мы отправимся в путешествие по городу с  неожиданной стороны и  увидим мир глазами не путешественника или эксперта, а человека, который исследует и видит город через свое хобби
            </div>
            <div className="name">
              федор елютин
            </div>
            <div className="name-description">
              создатель аудио-спектакля Impressario и ведущий нашего подкаста
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="social">
          <Vk className="social-icon" />
          <Odnoklasniki className="social-icon" />
          <Youtube className="social-icon" />
          <Telegram className="social-icon" />
        </div>
        <div className="rights">
          © {new Date().getFullYear()}. S7 Airlines — Все пpава защищены
        </div>
      </div>
    </main >
  )
}

export default IndexPage

export const Head = () => <title>s7 podcast</title>
