import React from "react";

export default function FilterOffcanvas() {

    function toggle() {
        const filterBoxOff = document.querySelector(".filter-box-offcanvas");
        filterBoxOff.classList.toggle("d-flex");
    }
            
  return (
    <button
      type="button"
      className="filter-icon-1 btn p-2 rounded-0 rounded-start-5 bg-very-light-green"
      onClick={toggle}
    >
      <i className="fa-regular fa-sliders"></i>
    </button>
  );
}
