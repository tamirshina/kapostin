import React, { useContext, useRef, useEffect, useState } from "react";
import LangContext from "../LangContext";
import russianText from "./RussianText";
import englishText from "./EnglishText";
import hebrewText from "./HebrewText";
import "../App.css";

function TextInserter({ typeOfParticularInfo }) {

  const lang = useContext(LangContext).lang;
  const textParaEl = useRef(null);

  const [isRightToLeft, setIsRightToLeft] = useState(false);

  useEffect(() => {
    if (lang === "hebrew") {
      setIsRightToLeft(true);
    } else {
      setIsRightToLeft(false);
    }
  }, [lang]);

  function createMarkup(str) {
    return { __html: str };
  }

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

  function infoToInsert() {
    return whichFileToUse().particularInfo[typeOfParticularInfo];
  }

  return (
    <div id="particularText" className={isRightToLeft ? "particular-main-container particular-position-heb" : "particular-main-container particular-position-en"}>
      <div className={isRightToLeft && 'particular-text-heb'}>
        <h1 className='particular-title' dangerouslySetInnerHTML={createMarkup(infoToInsert().title)} />
        <div className={isRightToLeft ? "heb-side-shape" : "side-shape"}></div>
        <p
          ref={textParaEl}
          id="particularTextBox"
          dangerouslySetInnerHTML={createMarkup(infoToInsert().info)}
        ></p>
      </div>
    </div>
  );
}

export default TextInserter;
