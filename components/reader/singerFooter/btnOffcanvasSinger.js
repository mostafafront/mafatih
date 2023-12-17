import React, { useEffect } from "react";

export default function BtnOffcanvasSinger() {

    useEffect(() => {

        const header = document.querySelector(".header");
        const singerBtn = document.querySelector(".singer-btn");
        const offcanvasBottomSinger = document.querySelector(".offcanvas-singer");

        offcanvasBottomSinger.addEventListener("show.bs.offcanvas", function () {
            singerBtn.classList.add("footer-buttons-select");
            header.classList.add("z-1000");
        })
        
        offcanvasBottomSinger.addEventListener("hide.bs.offcanvas", function () {
            singerBtn.classList.remove("footer-buttons-select");
            header.classList.remove("z-1000");
        })

    },[])

  return (
    <button
      className="btn singer-btn"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasBottom-singer"
      aria-controls="offcanvasBottom-singer"
    >
      باسم الکربلائي
    </button>
  );
}
