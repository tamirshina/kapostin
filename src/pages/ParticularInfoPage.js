import React, { useContext, useState, useEffect } from 'react';
import { timer, removeTimer } from '../fragments/TimerHundler';
import LangContext from "../LangContext";
import kaposEnBack from '../assets/kapostinPage/kapostin-back-en.png';
import kaposHebBack from '../assets/kapostinPage/kapostin-back-heb.png';
import landEnBack from '../assets/kapostinPage/land-back-en.png';
import landHebBack from '../assets/kapostinPage/land-back-heb.png';
import cairoEnBack from '../assets/kapostinPage/paper-back-en.png';
import cairoHebBack from '../assets/kapostinPage/paper-back-heb.png';
import scienceHebBack from '../assets/kapostinPage/tower-back-heb.png';
import scienceEnBack from '../assets/kapostinPage/tower-back-en.png';
import hebrewText from '../textHandler/HebrewText';
import englishText from '../textHandler/EnglishText';
import russianText from '../textHandler/RussianText';
import TextInserter from '../textHandler/TextInserter';
import '../App.css';

function ParticularInfoPage({ backBtnLogic, homeBtnLogic, typeOfParticularInfo }) {

  const lang = useContext(LangContext).lang;

  function isLeftToRight() {
    if (lang === "hebrew") {
      return false;
    } else {
      return true;
    }
  }

  useEffect(
    () => {
      timer(homeBtnLogic);
      return () => {
        removeTimer();
      };

    }, [homeBtnLogic]);

  function whichFileToUse() {
    if (lang === "hebrew") {
      return hebrewText;
    }
    if (lang === "english") {
      return englishText;
    } else {
      return russianText;
    }
  }

  function backgroundToRender() {

    switch (typeOfParticularInfo) {
      case 'kapostin':
        return isLeftToRight() ? kaposEnBack : kaposHebBack;
      case 'cairo':
        return isLeftToRight() ? cairoEnBack : cairoHebBack;
      case 'land':
        return isLeftToRight() ? landEnBack : landHebBack;
      case 'science':
        return isLeftToRight() ? scienceEnBack : scienceHebBack;
      default:
        return kaposEnBack;
    }
  }

  return (
    <>
      <img src={backgroundToRender()} alt='backgroundImage' className='fullBackground' />
      <TextInserter homeBtnLogic={homeBtnLogic} typeOfParticularInfo={typeOfParticularInfo} />
    </>
  );

}

export default ParticularInfoPage;
