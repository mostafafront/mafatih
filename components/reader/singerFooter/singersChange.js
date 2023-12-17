import React, { useEffect } from "react";

export default function SingersChange() {
  useEffect(() => {
    /* SINGER SELECTION */
    const singers = document.querySelectorAll(".singer-box");

    function toggleActiveSinger(item) {
      singers.forEach((item) => {
        item.classList.remove("singer-box-active");
      });
      item.classList.add("singer-box-active");
    }

    singers.forEach(function (item) {
      item.addEventListener("click", function (e) {
        toggleActiveSinger(e.target.closest(".singer-box"));
      });
    });
    /* SINGER SELECTION */
  }, []);

  return (
    <div className="singers d-flex flex-column gap-3 p-3 overflow-y-auto">
      <div className="singer-box cursor-pointer singer-box-active shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/dark-theme.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/singer-1.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/singer-1.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/singer-1.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/dark-theme.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/singer-1.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/singer-1.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/singer-1.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/dark-theme.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/singer-1.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/singer-1.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/singer-1.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/dark-theme.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
      <div className="singer-box cursor-pointer shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
        <img
          className="img-singer rounded-circle position-absolute start-0"
          src="/images/singer-1.png"
          alt="photo of singer one"
        />
        <span className="py-2">عبد الحي آل قمبر</span>
      </div>
    </div>
  );
}
