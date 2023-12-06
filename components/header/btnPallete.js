import React, { useEffect } from "react";

export default function BtnPallete() {


    useEffect(() => {

        const offcanvasPallete = document.querySelector(".offcanvasPallete");
        const palleteClose = document.getElementById("offcanvas-pallete-close");
    //   const footer = document.querySelector(".footer");


        offcanvasPallete.addEventListener("show.bs.offcanvas", function () {
            palleteClose.classList.add("close-offcanvas-header");
            palleteClose.innerHTML = `<i class="fa-solid fa-close fa-xl"></i>`;
            // footer.classList.add("z-1000");
        })
        
        offcanvasPallete.addEventListener("hide.bs.offcanvas", function () {
            palleteClose.classList.remove("close-offcanvas-header");
            palleteClose.classList.add("btn-close-offcanvas");
            palleteClose.innerHTML = `<i class="fa-regular fa-palette fa-xl"></i>`;
            // footer.classList.remove("z-1000");
        })

    },[])


  return (
    <button
      className="btn p-0 border-0"
      id="offcanvas-pallete-close"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasPallete"
      aria-controls="offcanvasPallete"
    >
      <i className="fa-regular fa-palette fa-xl"></i>
    </button>
  );
}
