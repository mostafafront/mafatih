import React, { useEffect } from "react";

export default function InputFont() {

    useEffect(() => {
        let defaultFontSize = parseInt(window.getComputedStyle(document.querySelector(".text-to-change-font-size")).fontSize);
        document.getElementById("fontSize").value = defaultFontSize;
    },[])

  return (
    <input
      type="number"
      name="font-size"
      id="fontSize"
      className="form-control w-25 text-center"
      readOnly
    />
  );
}
