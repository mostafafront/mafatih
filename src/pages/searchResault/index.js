import React from "react";
import HeaderC from "../../../components/header";
import FilterInput from "../../../components/index/filterInput";

export default function SearchResaultPage() {
  function preventSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <HeaderC />
      <main className="bg-light-green">
        <div className="container">
          {/* First Section */}
          <div className="firstSeaction px-3 py-4">
            <div className="form-box py-3">
              <form action="" encType="multipart/form-data">
                <div className="form-items d-flex rounded-pill bg-very-light-green">
                  <FilterInput />
                  <input
                    type="text"
                    name="name"
                    className="form-control border-0 rounded-0 bg-very-light-green placeHolder-sr"
                    placeholder="البحث في المفاتیح الجنان"
                  />
                  <button
                    type="button"
                    className="btn p-2 rounded-0 rounded-end-5"
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </form>
            </div>

            {/* <!-- FILTER BOX --> */}
            <div className="filter position-relative">
              <div
                id="filterBox-main"
                className="filter-box filter-box-main flex-column bg-filter-box rounded-4 p-2 position-absolute top-0 w-100 z-3"
              >
                <div className="filter-checks py-1 ps-1 form-check m-0">
                  <input
                    className="form-check-input me-2 ms-0"
                    type="checkbox"
                    value=""
                    id="filter-check1"
                  />
                  <label
                    className="form-check-label filter-text-color"
                    htmlFor="filter-check1"
                  >
                    البحث في جمیع المواضیع
                  </label>
                </div>
                <div className="filter-checks py-1 ps-1 form-check m-0">
                  <input
                    className="form-check-input me-2 ms-0"
                    type="checkbox"
                    value=""
                    id="filter-check2"
                  />
                  <label
                    className="form-check-label filter-text-color"
                    htmlFor="filter-check2"
                  >
                    البحث في الزیاراة
                  </label>
                </div>
                <div className="filter-checks py-1 ps-1 form-check m-0">
                  <input
                    className="form-check-input me-2 ms-0"
                    type="checkbox"
                    value=""
                    id="filter-check3"
                  />
                  <label
                    className="form-check-label filter-text-color"
                    htmlFor="filter-check3"
                  >
                    البحث في الأدعیة
                  </label>
                </div>
                <div className="filter-checks py-1 ps-1 form-check m-0">
                  <input
                    className="form-check-input me-2 ms-0"
                    type="checkbox"
                    value=""
                    id="filter-check4"
                  />
                  <label
                    className="form-check-label filter-text-color"
                    htmlFor="filter-check4"
                  >
                    البحث في الآعمال
                  </label>
                </div>
                <div className="filter-checks py-1 ps-1 form-check m-0">
                  <input
                    className="form-check-input me-2 ms-0"
                    type="checkbox"
                    value=""
                    id="filter-check5"
                  />
                  <label
                    className="form-check-label filter-text-color"
                    htmlFor="filter-check5"
                  >
                    البحث في النص
                  </label>
                </div>
              </div>
            </div>
            {/* <!-- FILTER BOX --> */}

            <div className="foundSearch d-flex placeHolder-sr">
              <div className="foundSearch-text">النتائج في البحث:</div>
              <div className="foundSearch-value ms-1">44</div>
            </div>
          </div>
        </div>
        {/* First Section */}

        {/* Second Section */}

        <div class="accordion" id="accordionPanelsStayOpenExample">
          <div class="accordion-item accordion-item-sr">
            <h2 class="accordion-header accordion-header-sr">
              <button
                class="accordion-button accordion-button-sr d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                ادعیة و زیاراة
                <i className="fa fa-chevron-left icon-accordion-sr"></i>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body accordion-body-s">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item accordion-item-sr">
            <h2 class="accordion-header accordion-header-sr">
              <button
                class="accordion-button accordion-button-sr d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                الأعمال
              <i className="fa fa-chevron-left icon-accordion-sr"></i>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              class="accordion-collapse collapse show"
            >
              <div class="accordion-body accordion-body-s">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          
        </div>
        {/* Second Section */}
      </main>
    </>
  );
}
