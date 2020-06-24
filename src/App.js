import React, { useState } from 'react';
import FrontPage from './pages/FrontPage';
import HomeBtn from './fragments/HomeBtn';
import LanguageBiv from './fragments/LanguageButtons'
import './App.css';
import KapostinPage from './pages/KapostinPage';

function App() {

  const [isFrontPage, setIstFrontPage] = useState(true);
  const [isKapostinPage, setIsKapostinPage] = useState(false);

  const homeBtn = () => {
    setIstFrontPage(true);
  };
  const switchPageFrontToOne = () => {
    setIsKapostinPage(true);
    setIstFrontPage(false);
  }
  return (
    <>
      {isFrontPage && <FrontPage onClickFunc={switchPageFrontToOne} />}
      {isKapostinPage && <KapostinPage />}
      <LanguageBiv />
      {!isFrontPage && <HomeBtn homeBtnLogic={homeBtn} />}
    </>
  );
}

export default App;
