import * as React from "react";

import './fonts.scss';
import './style.scss';

import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowDown from '../assets/arro-down.svg';
import ArrowDown2 from '../assets/arrow-2.svg';
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
          <img className="image-1" src='/image-bg.jpg' lazy="true" />
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
              Исследуем, чем живут города России, вместе с теми, кто там живет
            </div>
            <div className="play-block">
              <PlayButton onPlay={handleScrollToPlayer} />
              <span >
                Слушать подкаст
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
                Найти ключ
                к городу
              </div>
              <div className="description">
                Восемь городов России — восемь человек, для которых их город стал местом силы и главным вдохновением. Отправимся в путешествие и увидим города и то, что рядом, глазами этих людей — чтобы далекие места стали ближе и роднее
              </div>
              <div className="play-block">
                <PlayButton onPlay={handleScrollToPlayer} />
                <span>
                  Погрузиться в атмосферу
                </span>
              </div>
            </div>
          </div>
          <div className="arrows">
            <ArrowDown2 />
            <ArrowDown2 />
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
            left: `calc((100% / 2) - ${podcastIndex * 250}px)`,
          }} />

          <PlayerWidget podcastIndex={podcastIndex} changeIndex={(idx) => setPodcastIndex(idx)} />

        </div>
        <div className="about">
          <img src='ava.png' alt='Ведущий' lazy="true" />
          <div className="block">
            <div className="description">
              Ключи от города хранятся у тех, кто там живет. Мы отыскали своих людей в восьми российских городах и пообщались с ними. Разведали для вас самые удивительные местечки. И просто очень вдохновились! Потому что люди — это то, что определяет любое место.

            </div>
            <div className="name">
              Женя Гут
            </div>
            <div className="name-description">
              журналист, блогер и ведущая нашего подкаста
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

export const Head = () => <>
  <title>Место по душе</title>
  <meta name="description" content="Подкаст S7 Airlines и студии «Толк» — исследуем, чем живут люди и их города" />
  <meta property="og:title" content="Место по душе" />
  <meta property="og:description" content="Подкаст S7 Airlines и студии «Толк» — исследуем, чем живут люди и их города" />
  <meta property="og:image" content="/og/OG-image-1.png" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="627" />
  <meta property="og:image" content="/og/OG-image-2.png" />
  <meta property="og:image:width" content="1000" />
  <meta property="og:image:height" content="480" />
</>
