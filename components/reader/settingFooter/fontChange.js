import React, { useEffect } from "react";

export default function FontChange() {

    useEffect(() => {

        // for change Font Prayer
        const fontsPrayer = document.querySelectorAll(".font-prayer");
        
        function activeFontPrayer(item) {
            fontsPrayer.forEach(item => {
                item.classList.remove("font-prayer-active");
            });
            item.classList.add("font-prayer-active");
        }
        
        fontsPrayer.forEach(function (item) {
            item.addEventListener("click", function (e) {
                activeFontPrayer(e.target.closest(".font-prayer"));
            });
        });
        // for change Font Prayer

        
        // for change Font Translate
        const fontsTranslate = document.querySelectorAll(".font-translate");
        
        function activeFontTranslate(item) {
            fontsTranslate.forEach(item => {
                item.classList.remove("font-translate-active");
            });
            item.classList.add("font-translate-active");
        }
        
        fontsTranslate.forEach(function (item) {
            item.addEventListener("click", function (e) {
                activeFontTranslate(e.target.closest(".font-translate"));
            });
        });
        // for change Font Translate



    },[])

  return (
    <div
      className="change-font-family d-flex flex-column gap-4 px-3 pt-3"
      dir="ltr"
    >
      <div className="fontChange-prayer">
        <h3>Quran Font style :</h3>
        <div className="fontBox-prayer d-flex flex-column gap-3">
          <div
            className="font-prayer cursor-pointer font-prayer-active shadow-light d-flex rounded-3 justify-content-around align-items-center"
            id="font-family-translate-1"
            dir="rtl"
          >
            <span>نستعلیق :</span>
            <img src="/images/font-family-1.png" alt="font-family-1" />
          </div>
          <div
            className="font-prayer cursor-pointer shadow-light d-flex rounded-3 justify-content-around align-items-center"
            id="font-family-translate-2"
            dir="rtl"
          >
            <span>نستعلیق :</span>
            <img src="/images/font-family-1.png" alt="font-family-1" />
          </div>
          <div
            className="font-prayer cursor-pointer shadow-light d-flex rounded-3 justify-content-around align-items-center"
            id="font-family-translate-3"
            dir="rtl"
          >
            <span>نستعلیق :</span>
            <img src="/images/font-family-1.png" alt="font-family-1" />
          </div>
        </div>
      </div>
      <div className="fontChange-translate">
        <h3>translation Font style :</h3>
        <div className="fontBox-translate d-flex flex-column gap-3">
          <div
            className="font-translate cursor-pointer font-translate-active shadow-light d-flex rounded-3 justify-content-around align-items-center"
            id="font-family-1"
            dir="rtl"
          >
            <span>نستعلیق :</span>
            <img src="/images/font-family-1.png" alt="font-family-1" />
          </div>
          <div
            className="font-translate cursor-pointer shadow-light d-flex rounded-3 justify-content-around align-items-center"
            id="font-family-2"
            dir="rtl"
          >
            <span>نستعلیق :</span>
            <img src="/images/font-family-1.png" alt="font-family-1" />
          </div>
          <div
            className="font-translate cursor-pointer shadow-light d-flex rounded-3 justify-content-around align-items-center"
            id="font-family-3"
            dir="rtl"
          >
            <span>نستعلیق :</span>
            <img src="/images/font-family-1.png" alt="font-family-1" />
          </div>
        </div>
      </div>
    </div>
  );
}
