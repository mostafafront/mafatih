import React, { useEffect } from "react";

export default function BtnChooseM() {

    /*DISPLAY TYPE OF MONEY BOX*/

    useEffect(() => {

        const btnChooseTypeOfMoney = document.querySelector(".button-choose-type-of-money");
        const typeOfMoneyBox = document.querySelector(".types-of-money-box");
        const closeBoxMoney = document.querySelector(".close-box-money");
        


btnChooseTypeOfMoney.addEventListener("click", function () {
	typeOfMoneyBox.classList.remove("d-none");
	typeOfMoneyBox.classList.add("d-flex");
});

closeBoxMoney.addEventListener("click", () => {
	typeOfMoneyBox.classList.add("d-none");
	event.stopPropagation();
});
/*DISPLAY TYPE OF MONEY BOX*/
},[])

  return (
    <button
      type="button"
      className="button-choose-type-of-money btn d-flex justify-content-center align-items-center p-3 d-flex bg-white"
    >
      <i className="fa fa-chevron-down opacity-50"></i>
    </button>
  );
}
