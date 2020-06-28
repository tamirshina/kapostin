import React, { useState } from 'react';
import FrontPage from './pages/FrontPage';
import HomeBtn from './fragments/HomeBtn';
import LanguageBiv from './fragments/LanguageButtons'
import './App.css';
import KapostinPage from './pages/KapostinPage';
import ParticularInfoPage from './pages/ParticularInfoPage';
import BackBtn from './fragments/BackBtn';

function App() {

  const [isFrontPage, setIstFrontPage] = useState(true);
  const [isKapostinPage, setIsKapostinPage] = useState(false);
  const [typeOfParticularInfo, setTypeOfParticularInfo] = useState();
  const [isParticularInfoPage, setIsParticularInfoPage] = useState(false);

  const homeBtn = () => {
    setIstFrontPage(true);
    setIsParticularInfoPage(false);
    setIsKapostinPage(false);
  };
  const switchPageFrontToOne = () => {
    setIsKapostinPage(true);
    setIstFrontPage(false);
  }
  const moveToParticularInfo = (e) => {

    if (e) {
      setTypeOfParticularInfo(e.currentTarget.id);
      setIsParticularInfoPage(true);
      setIsKapostinPage(false)
    }
  }
  const backToKapostinPage = () => {
    setIsKapostinPage(true);
    setIsParticularInfoPage(false);
  }
  return (
    <>
      {isFrontPage && <FrontPage onClickFunc={switchPageFrontToOne} />}
      {isKapostinPage && <KapostinPage moveToParticularInfo={moveToParticularInfo} />}
      {isParticularInfoPage && <ParticularInfoPage typeOfParticularInfo={typeOfParticularInfo} />}
      <LanguageBiv />
      {!isFrontPage && <HomeBtn homeBtnLogic={homeBtn} />}
      {isParticularInfoPage && <BackBtn backToKapostinPage={backToKapostinPage} />}
    </>
  );
}

export default App;
