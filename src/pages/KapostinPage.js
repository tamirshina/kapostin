import React, { useContext, useEffect, useRef } from "react";
import defualtBackEn from "../assets/kapostinPage/full-back-ENG.png";
import defualtBackHeb from "../assets/kapostinPage/full-back-HEB.png";
import rightArrow from "../assets/kapostinPage/buttenNEXT.png";
import leftArrow from "../assets/kapostinPage/buttenBACK.png";
import { timer, removeTimer } from '../fragments/TimerHundler';
import hebrewText from '../textHandler/HebrewText';
import englishText from '../textHandler/EnglishText';
import russianText from '../textHandler/RussianText';
import LangContext from "../LangContext";
import "../App.css";

function KapostinPage({ homeBtnLogic, moveToParticularInfo }) {

    const { lang } = useContext(LangContext);
    const scrollEl = useRef(null);

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
    function onArrowClick() {

        scrollEl.current.scrollLeft = 4000;
    }
    function onBackArrowClick() {

        scrollEl.current.scrollLeft -= 4000;
    }

    return (
        <>
            <div className={isLeftToRight() ? 'no-modification' : 'hebrew-modification'} id='kapostinPage' ref={scrollEl} >
                <div>
                    <img id='shina' src={isLeftToRight() ? defualtBackEn : defualtBackHeb} alt='background pic' className={'full-Background-no-width'} />
                </div>
                <div>
                    <img src={isLeftToRight() ? rightArrow : leftArrow} alt='arrow' className={isLeftToRight() ? 'arrow-position' : 'heb-arrow-pos'} onClick={isLeftToRight() ? onArrowClick : onBackArrowClick} />
                </div>
                <div>
                    <img src={isLeftToRight() ? leftArrow : rightArrow} alt='arrow' className={isLeftToRight() ? 'back-scroll-arrow-position' : 'heb-back-arrow-pos'} onClick={isLeftToRight() ? onBackArrowClick : onArrowClick} />
                </div>
                <div>
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
                </div>
            </div>
        </>
    );
}

export default KapostinPage;
