import React, { useEffect } from "react";

export default function BtnMenu() {
  /*OFFCANVAS CLOSE BUTTON*/

  useEffect(() => {

      const offcanvasBars = document.querySelector(".offcanvas-bars");
      const barsClose = document.getElementById("bars-close");
    //   const footer = document.querySelector(".footer");
      
      offcanvasBars.addEventListener("show.bs.offcanvas", function () {
    barsClose.classList.add("close-offcanvas-header");
    barsClose.innerHTML = `<i class="fa-solid fa-close fa-xl"></i>`;
    // footer.classList.add("z-1000");
  });

  offcanvasBars.addEventListener("hide.bs.offcanvas", function () {
    barsClose.classList.remove("close-offcanvas-header");
    barsClose.classList.add("btn-close-offcanvas");
    barsClose.innerHTML = `<i class="fa-solid fa-bars fa-xl"></i>`;
    // footer.classList.remove("z-1000");
});

},[])


  return (
    <button
      id="bars-close"
      className="btn p-0 border-0"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#staticBackdrop"
      aria-controls="staticBackdrop"
    >
      <i className="fa-solid fa-bars fa-xl"></i>
    </button>
  );
}
