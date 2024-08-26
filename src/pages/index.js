import * as React from "react";

import './fonts.scss';
import './style.scss';

import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowDown from '../assets/arro-down.svg';
import CurvedText1 from '../assets/curved-text-big-1.svg';
import CurvedText2 from '../assets/curved-text-big-2.svg';
import Logo from '../assets/logo.svg';
import Odnoklasniki from '../assets/odnoklasniki.svg';
import Tag from '../assets/tag.svg';
import Telegram from '../assets/telegram.svg';
import Vk from '../assets/vk.svg';
import Youtube from '../assets/youtube.svg';
import PlayButton from "../components/PlayButton/PlayButton";
import PlayerWidget from "../components/PlayerWidget/PlayerWidget";

const IndexPage = () => {
  const ellipseRef = React.useRef(null);
  const { scrollYProgress } = useScroll();

  const [podcastIndex, setPodcastIndex] = React.useState(0);

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.7]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 90]); // Rotates from 0 to 360 degrees

  const handleScrollToPlayer = () => document.getElementById('player')?.scrollIntoView()


  return (
    <main className="main">
      <Logo className="logo" />
      <div className="containerFirst" ref={ellipseRef}>
        <div className="imageContainer">
          <img className="image-1" src='image-1.jpg' lazy="true" />
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
      <div className="containerPlug">

      </div>
      <div className="containerSecond">
        <div className="substract-mobile">
          <div className="text">
          </div>
        </div>
        <div className="bg">
          <CurvedText1 className="curvedText1" />
          <CurvedText2 className="curvedText2" />
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
          <div className="arrows">
            <ArrowDown />
            <ArrowDown />
          </div>
        </div>
        <div className="plug" />
      </div>
      <div className="containerThird" id="player">
        <div className="radio">
          <div className="route" style={{
            left: `calc((100% / 2) - ${podcastIndex * 600}px)`,
          }} />
          <div className="route-2" style={{
            left: `calc((85% / 2) - ${podcastIndex * 250}px)`,
          }} />

          <PlayerWidget podcastIndex={podcastIndex} changeIndex={(idx) => setPodcastIndex(idx)} />

        </div>
        <div className="about">
          <img src='ava.png' alt='Ведущий' lazy="true" />
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
          <a target="_blank" href="https://vk.com/s7airlines" type="button"> <Vk className="social-icon" /></a>
          <a target="_blank" href="https://ok.ru/s7airlines" type="button"><Odnoklasniki className="social-icon" /></a>
          <a target="_blank" href="https://www.youtube.com/user/S7Group" type="button"><Youtube className="social-icon" /></a>
          <a target="_blank" href="https://t.me/s7airlines" type="button"><Telegram className="social-icon" /></a>
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
