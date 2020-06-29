import React, { useContext } from "react";
import scrollUpImg from "../assets/11-up-arrow.png";
import scrollDwonImg from "../assets/02-down-arrow.png";
import LangContext from "../LangContext";
import "../App.css";

function ScrollingBtn({ scrollDown, scrollUp }) {

    const lang = useContext(LangContext).lang;

    function isLeftToRight() {
        if (lang === "hebrew") {
            return false;
        } else {
            return true;
        }
    }


    return (
        <div className={isLeftToRight() ? "scroll-button-container" : "scroll-container-heb"} >
            <img
                src={scrollUpImg}
                alt="scroll-up"
                onClick={scrollUp}
                className={"left-scroll"}
            />
            <img src={scrollDwonImg} alt="scroll-up" onClick={scrollDown} />
        </ div>
    );
}

export default ScrollingBtn;
