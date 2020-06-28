import React, { useContext, useEffect } from "react";
import defualtBackEn from "../assets/kapostinPage/defualt-back-en.png";
import defualtBackHeb from "../assets/kapostinPage/defualt-back-heb.png";
import { timer, removeTimer } from '../fragments/TimerHundler';
import hebrewText from '../textHandler/HebrewText';
import englishText from '../textHandler/EnglishText';
import russianText from '../textHandler/RussianText';
import LangContext from "../LangContext";
import "../App.css";

function KapostinPage({ homeBtnLogic, moveToParticularInfo }) {

    const { lang } = useContext(LangContext);

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
    function createMarkup(str) {
        return { __html: str };
    }

    return (
        <>
            <img src={isLeftToRight() ? defualtBackEn : defualtBackHeb} alt='background pic' className='fullBackground' />
            <div className='front-title-container'>
                <h1>{whichFileToUse().kapostinTitle}</h1>
            </div>
            {whichFileToUse().titleBox.map((item) => {
                return (
                    <div key={item.name} id={item.name} onClick={moveToParticularInfo} className={'general-kapostin-container'} style={item.css}>
                        <div dangerouslySetInnerHTML={createMarkup(item.text)} className='kapostin-font-weight kapostin-box-first-text' />
                        <div dangerouslySetInnerHTML={createMarkup(item.more)} className='kapostin-font-weight' />
                    </div>
                );
            })}
            {whichFileToUse().miniTitles.map((item) => {
                return (
                    <div key={item.name} id={item.name} className={'mini-kapostin-container'} style={item.css}>
                        <div dangerouslySetInnerHTML={createMarkup(item.text)} className='kapostin-font-weight' />
                    </div>
                );
            })}


        </>
    );
}

export default KapostinPage;
