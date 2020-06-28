import React from "react";
import backImg from "../assets/32-back.png";
import "../App.css";

function BackBtn({ backToKapostinPage }) {
  return (
    <img
      src={backImg}
      alt="backBtn"
      onClick={backToKapostinPage}
      id="backBtn"
      className="backBtn"
    />
  );
}

export default BackBtn;
