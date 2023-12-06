import React from "react";

export default function FilterInput() {

    function toogleFilterInput() {
        const filterBox = document.querySelector(".filter-box-main");
        filterBox.classList.toggle("d-flex");
    }

  return (
    <button
      type="button"
      className="filter-icon-2 btn p-2 rounded-0 rounded-start-5"
      onClick={toogleFilterInput}
    >
      <i className="fa-regular fa-sliders"></i>
    </button>
  );
}
