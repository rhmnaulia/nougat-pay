import React from 'react';
import './Hero.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Hero({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
}) {
  return (
    <>
      <div className={lightBg ? 'home__hero' : 'home__hero darkBg'}>
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row',
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
