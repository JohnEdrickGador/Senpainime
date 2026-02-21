import React from "react";
import prevArrow from "./left-arrow.svg";
import nextArrow from "./right-arrow.svg"

function BtnSlider({move, direction}) {

    return(
        <button className={direction === "prev" ? "slider-btn prev" : "slider-btn next"} onClick={move}>
            <img src={direction === "prev" ? prevArrow : nextArrow}></img>
        </button>
    )
}

export default BtnSlider