import * as React from "react"

import './fonts.scss'
import './style.scss'

import PlayIcon from '../assets/play-button.svg';
import Tag from '../assets/tag.svg';
import CurvedText1 from '../assets/cuved-text-1.svg';
import { useEffect } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '../assets/logo.svg';
import Vk from '../assets/vk.svg';
import Odnoklasniki from '../assets/odnoklasniki.svg';
import Telegram from '../assets/telegram.svg';
import Youtube from '../assets/youtube.svg';
import Ava from '../../static/ava.png'
import PlayerWidget from "../components/PlayerWidget/PlayerWidget";
import PODCASTS from "../components/PlayerWidget/podcasts";
import MainImage from '../../static/image-1.jpg'

const IndexPage = () => {
  const ellipseRef = React.useRef(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const [podcastIndex, setPodcastIndex] = React.useState(1);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
  }

  const handlePrev = () => {
    if (podcastIndex > 1) {
      setPodcastIndex(podcastIndex - 1);
    }
  }

  const handleNext = () => {
    if (podcastIndex < PODCASTS.length) {
      setPodcastIndex(podcastIndex + 1);
    }
  }

  const { scrollYProgress, scrollY } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.7]);
  const rotate = useTransform(scrollYProgress, [0, 0.3], [0, 90]); // Rotates from 0 to 360 degrees


  return (
    <main className="main">
      <Logo className="logo" />
      <div className="containerFirst" ref={ellipseRef}>
        <div className="imageContainer">
          <img className="image-1" src={MainImage} />
        </div>
        <motion.div className="ellipse" id="ellipse"
          transition={{ duration: 0.5, ease: "easeOut" }}

          style={
            {
              scale: scale,
              rotate: rotate,
            }
          } />

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
              <PlayIcon onClick={() => { console.log('click :>> '); }} className='play-icon' />
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
                <PlayIcon onClick={() => { console.log('click :>> '); }} className='play-icon' />
                <span>
                  послушать тизер
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="containerThird">
        <div className="radio">


          <PlayerWidget podcast={PODCASTS[podcastIndex - 1]} index={podcastIndex} total={PODCASTS.length} isPlaying={isPlaying} onNext={handleNext} onPrev={handlePrev} onPlay={handlePlay} />

        </div>
        <div className="about">

          <img src={Ava} />
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
