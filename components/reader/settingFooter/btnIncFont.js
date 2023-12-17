import React, { useEffect } from "react";

export default function BtnIncFont() {

    useEffect(() => {
        const increaseBtn = document.querySelector(".increase");
        let boxFontSize = document.querySelector(".text-to-change-font-size");
        
        increaseBtn.addEventListener("click", function () {
            let defaultFontSize = parseInt(window.getComputedStyle(document.querySelector(".text-to-change-font-size")).fontSize);
            defaultFontSize++;
            if (defaultFontSize > 48) {
                defaultFontSize = 48;
            }
            console.log(defaultFontSize);
            document.getElementById("fontSize").value = defaultFontSize;
            boxFontSize.style.fontSize = defaultFontSize + "px";
        });
    },[])

  return (
    <button className="btn border increase">
      <span>
        <i className="fa-regular fa-plus fa-xs"></i>
        <i className="fa-regular fa-a"></i>
      </span>
    </button>
  );
}
