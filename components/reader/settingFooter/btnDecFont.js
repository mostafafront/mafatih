import React, { useEffect } from "react";

export default function BtnDecFont() {

  useEffect(() => {
    let boxFontSize = document.querySelector(".text-to-change-font-size");
    const decreaseBtn = document.querySelector(".decrease");
    
    decreaseBtn.addEventListener("click", function () {
      let defaultFontSize = parseInt(window.getComputedStyle(document.querySelector(".text-to-change-font-size")).fontSize);
      defaultFontSize--;
      if (defaultFontSize <= 16) {
        defaultFontSize = 16;
      }
      console.log(defaultFontSize);
      document.getElementById("fontSize").value = defaultFontSize;
      // console.log(boxFontSize.style.fontSize);
      boxFontSize.style.fontSize = defaultFontSize + "px";
    });
    
  },[])

  return (
    <button className="btn border decrease">
      <span>
        <i className="fa-regular fa-minus fa-xs"></i>
        <i className="fa-regular fa-a"></i>
      </span>
    </button>
  );
}
