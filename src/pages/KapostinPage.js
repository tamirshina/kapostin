import React, { useContext, useEffect } from "react";
import defualtBackEn from "../assets/kapostinPage/defualt-back-en.png";
import defualtBackHeb from "../assets/kapostinPage/defualt-back-heb.png";
import frontTitleEn from "../assets/03-title-en-front.png";
import frontTitleHeb from "../assets/01-title-heb-front.png";
import frontTitleRu from "../assets/03-title-en-front.png";
import { timer, removeTimer } from '../fragments/TimerHundler';
import hebrewText from '../textHandler/HebrewText';
import englishText from '../textHandler/EnglishText';
import russianText from '../textHandler/RussianText';
import LangContext from "../LangContext";
import "../App.css";

function KapostinPage({ onClickFunc, homeBtnLogic }) {

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

            return () => { // Return callback to run on unmount.

                removeTimer();
            };

        }, [homeBtnLogic]);

    function titleToUse() {
        if (lang === "hebrew") {
            return hebrewText.kapostinTitle;
        }
        if (lang === "english") {
            return englishText.kapostinTitle;
        } else {
            return russianText.kapostinTitle;
        }
    }
    return (
        <>
            <img src={isLeftToRight() ? defualtBackEn : defualtBackHeb} alt='background pic' className='fullBackground' />
            <div className='front-title-container'>
                <h1>{titleToUse()}</h1>
            </div>

        </>
    );
}

export default KapostinPage;
