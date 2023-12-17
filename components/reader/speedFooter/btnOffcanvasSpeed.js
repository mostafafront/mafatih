import React from "react";

export default function BtnOffcanvasSpeed() {
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
