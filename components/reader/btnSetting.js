import React, { useEffect } from "react";

export default function BtnSetting() {

  useEffect(() => {
    const settingBtn = document.querySelector(".setting-btn");
    const header = document.querySelector(".header");
    const offcanvasBottomSetting = document.querySelector(".offcanvas-setting");
    
    offcanvasBottomSetting.addEventListener("show.bs.offcanvas", function (){
      settingBtn.classList.add("footer-buttons-select");
      header.classList.add("z-1000");
    })
    
    offcanvasBottomSetting.addEventListener("hide.bs.offcanvas", function () {
      settingBtn.classList.remove("footer-buttons-select");
      header.classList.remove("z-1000");
    })
  },[])

  return (
    <button
      className="btn setting-btn"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasBottom-setting"
      aria-controls="offcanvasBottom-setting"
    >
      <i className="fa-regular fa-gear fa-xl"></i>
    </button>
  );
}
