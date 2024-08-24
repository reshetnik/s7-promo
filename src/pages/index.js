import * as React from "react"

import './fonts.scss'
import './style.scss'

import PlayIcon from '../assets/play-button.svg';
import Tag from '../assets/tag.svg';
import CurvedText1 from '../assets/cuved-text-1.svg';
import { useEffect } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';
import Logo from '../assets/logo.svg';

const IndexPage = () => {
  const ellipseRef = React.useRef(null)

  const { scrollYProgress, scrollY } = useScroll({
    // target: ellipseRef,
    // offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.5]);
  const rotate = useTransform(scrollYProgress, [0, 0.3], [0, 90]); // Rotates from 0 to 360 degrees

  console.log('scrollYProgress :>> ', scrollYProgress);

  return (
    <main className="main">
      <Logo className="logo" />
      <div className="containerFirst" ref={ellipseRef}>
        <div className="imageContainer">
          <img className="image-1" src="../../static/image-1.jpg" />
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

      </div>
    </main >
  )
}

export default IndexPage

export const Head = () => <title>s7 podcast</title>
