import React, { useEffect } from "react";

export default function BtnOffcanvasSpeed() {

    useEffect(() => {
        
        const speedBtn = document.querySelector(".speed-btn");
        const offcanvasBottomSpeed = document.querySelector(".offcanvas-speed");
        const header = document.querySelector(".header");

        offcanvasBottomSpeed.addEventListener("show.bs.offcanvas", function () {
            speedBtn.classList.add("footer-buttons-select");
            header.classList.add("z-1000");
        })
        
        offcanvasBottomSpeed.addEventListener("hide.bs.offcanvas", function () {
            speedBtn.classList.remove("footer-buttons-select");
            header.classList.remove("z-1000");
        })        

    },[])

  return (
    <button
      className="btn speed-btn"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasBottom-speed"
      aria-controls="offcanvasBottom-speed"
    >
      1.00x
    </button>
  );
}
