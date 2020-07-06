import React, { useContext, useEffect } from "react";
import frontBackground from "../assets/02-background-pic.png";
import frontTitleEn from "../assets/03-title-en-front.png";
import frontTitleHeb from "../assets/01-title-heb-front.png";
import frontTitleRu from "../assets/front-headline-rus.png";
import { timer, removeTimer } from '../fragments/TimerHundler';
import LangContext from "../LangContext";
import "../App.css";

function FrontPage({ onClickFunc, homeBtnLogic }) {

    const { lang } = useContext(LangContext);

    useEffect(
        () => {
            timer(homeBtnLogic);

            return () => { // Return callback to run on unmount.

                removeTimer();
            };

        }, [homeBtnLogic]);

    function titleToUse() {
        if (lang === "hebrew") {
            return frontTitleHeb;
        }
        if (lang === "english") {
            return frontTitleEn;
        } else {
            return frontTitleRu;
        }
    }
    return (
        <>
            <img src={frontBackground} onClick={onClickFunc} alt='background pic' className='fullBackground' />
            <div className='front-title-container'>
                <img src={titleToUse()} onClick={onClickFunc} alt='background pic' className='front-title-image' />
            </div>

        </>
    );
}

export default FrontPage;
