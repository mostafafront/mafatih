import React from "react";
import Link from "next/link";
import BtnMenu from "../../../components/header/btnMenu";
import FilterOffcanvas from "../../../components/header/filterOffcanvas";

export default function ReaderPage() {
  return (
    <>
      {/* <!--  HEADER  --> */}
      <header className="header position-sticky top-0 z-in-nav">
        <nav className="navbar bg-header radius-reader height-header w-100" dir="ltr">
          <div className="container-fluid d-flex justify-content-between px-4">
            <div className="leftHeader-reader d-flex align-items-center gap-4">
              <div className="backHome-iconReader">
                <Link href={"./"}>
                  <i className="fa-solid fa-chevron-left"></i>
                </Link>
              </div>
              <div className="savePrayer-iconReader">
                <button className="border-0 bg-transparent p-0 p-md-2">
                <i className="fa-regular fa-bookmark"></i>{" "}
                {/* for show use the class : fa-solid */}
                </button>
              </div>
            </div>
            <div className="titlePrayer d-flex justify-content-center align-items-center" dir="rtl">
                <h1 className="titlePrayer-text mb-0">زیارت عاشورا</h1>
            </div>
            <div className="navbar-toggle d-flex justify-content-end">
              <BtnMenu />
            </div>
          </div>
        </nav>
      </header>
      {/* <!-- HEADER --> */}

      {/* <!-- OFFCANVAS NAV BARS --> */}
      <div
        className="offcanvas offcanvas-start offcanvas-bars bg-light-green z-in-nav-offcanvas"
        dir="rtl"
        data-bs-backdrop="true"
        tabIndex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div className="offcanvas-body">
          <div className="d-flex flex-column gap-3">
            {/* <!--SEARCH BOX--> */}
            <div className="form-box pb-2">
              <form action="" encType="multipart/form-data">
                <div className="d-flex rounded-pill">
                  <div className="d-flex rounded-pill w-100">
                    <FilterOffcanvas />

                    <input
                      type="text"
                      name="name"
                      className="input-search form-control border-0 rounded-0 bg-very-light-green"
                      placeholder="البحث في المفاتیح الجنان"
                    />
                    <button
                      type="button"
                      className="icon-search btn p-2 rounded-0 rounded-end-5 bg-very-light-green"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </form>

              <div className="filter position-relative">
                <div
                  id="filterBox-in-canvas"
                  className="filter-box filter-box-offcanvas flex-column bg-filter-box rounded-4 p-2 position-absolute top-0 w-100 z-3 mt-4"
                >
                  <div className="filter-checks py-1 ps-1 form-check m-0">
                    <input
                      className="form-check-input me-2 ms-0"
                      type="checkbox"
                      value=""
                      id="filter-check-offcanvas1"
                    />
                    <label
                      className="form-check-label filter-text-color"
                      htmlFor="filter-check-offcanvas1"
                    >
                      البحث في جمیع المواضیع
                    </label>
                  </div>
                  <div className="filter-checks py-1 ps-1 form-check m-0">
                    <input
                      className="form-check-input me-2 ms-0"
                      type="checkbox"
                      value=""
                      id="filter-check-offcanvas2"
                    />
                    <label
                      className="form-check-label filter-text-color"
                      htmlFor="filter-check-offcanvas2"
                    >
                      البحث في الزیاراة
                    </label>
                  </div>
                  <div className="filter-checks py-1 ps-1 form-check m-0">
                    <input
                      className="form-check-input me-2 ms-0"
                      type="checkbox"
                      value=""
                      id="filter-check-offcannvas3"
                    />
                    <label
                      className="form-check-label filter-text-color"
                      htmlFor="filter-check-offcannvas3"
                    >
                      البحث في الأدعیة
                    </label>
                  </div>
                  <div className="filter-checks py-1 ps-1 form-check m-0">
                    <input
                      className="form-check-input me-2 ms-0"
                      type="checkbox"
                      value=""
                      id="filter-check-offcannvas4"
                    />
                    <label
                      className="form-check-label filter-text-color"
                      htmlFor="filter-check-offcannvas4"
                    >
                      البحث في الآعمال
                    </label>
                  </div>
                  <div className="filter-checks py-1 ps-1 form-check m-0">
                    <input
                      className="form-check-input me-2 ms-0"
                      type="checkbox"
                      value=""
                      id="filter-check-offcannvas5"
                    />
                    <label
                      className="form-check-label filter-text-color"
                      htmlFor="filter-check-offcannvas5"
                    >
                      البحث في النص
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--SEARCH BOX--> */}

            {/* <!--TABS IN OFCANVAS--> */}
            <ul
              className="nav nav-pills justify-content-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item w-50" role="presentation">
                <button
                  className="nav-link w-100 bg-tabs text-color-tabs rounded-5 rounded-end-0 active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Home
                </button>
              </li>
              <li className="nav-item w-50" role="presentation">
                <button
                  className="nav-link w-100 bg-tabs text-color-tabs rounded-5 rounded-start-0"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </li>
            </ul>
            {/* <!--ACCORDIONS FOR TABS--> */}
            {/* <!--TABS IN OFCANVAS--> */}
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex="0"
              >
                <div className="accordion" id="accordionFlushExample-1">
                  <div className="accordion-item accordion-item-nav">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button accordion-button-nav collapsed d-flex justify-content-end gap-1"
                        dir="ltr"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <span className="text-dark">باب الأول</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body accordion-body-nav">
                        <div className="accordion-item accordion-item-nav">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button accordion-button-nav collapsed d-flex justify-content-end gap-1"
                              dir="ltr"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne-1"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <span className="text-dark">
                                اغمال لیلة حادی عشر من یوم شهر الرمضان الکریم
                                (لیلة قدر)
                              </span>
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne-1"
                            className="accordion-collapse collapse"
                          >
                            <div className="accordion-body accordion-body-nav">
                              <div className="accordion-body accordion-body-nav">
                                <Link
                                  href={"./"}
                                  className="text-decoration-none text-dark"
                                >
                                  اعمال یوم تاسوعاء
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="accordion-item accordion-item-nav">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button accordion-button-nav collapsed d-flex justify-content-end gap-1"
                              dir="ltr"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseOne-2"
                              aria-expanded="false"
                              aria-controls="flush-collapseOne"
                            >
                              <span className="text-dark">
                                اعمال یوم عاشوراء
                              </span>
                            </button>
                          </h2>
                          <div
                            id="flush-collapseOne-2"
                            className="accordion-collapse collapse"
                          >
                            <div className="accordion-body accordion-body-nav">
                              <div className="accordion-body accordion-body-nav">
                                <Link
                                  href={"./"}
                                  className="text-decoration-none text-dark"
                                >
                                  اعمال یوم عرفة
                                </Link>
                              </div>
                              <div className="accordion-body accordion-body-nav">
                                <Link
                                  href={"./"}
                                  className="text-decoration-none text-dark"
                                >
                                  اعمال یوم عرفة
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-item-nav">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button accordion-button-nav collapsed d-flex justify-content-end gap-1"
                        dir="ltr"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <span className="text-dark">یوم عرفة</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseTwo"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body accordion-body-nav">
                        <div className="accordion-item accordion-item-nav">
                          <h2 className="accordion-header">
                            <button
                              className="accordion-button accordion-button-nav collapsed d-flex justify-content-end gap-1"
                              dir="ltr"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#flush-collapseTwo-2"
                              aria-expanded="false"
                              aria-controls="flush-collapseTwo"
                            >
                              <span className="text-dark">
                                اعمال یوم عاشوراء
                              </span>
                            </button>
                          </h2>
                          <div
                            id="flush-collapseTwo-2"
                            className="accordion-collapse collapse"
                          >
                            <div className="accordion-body accordion-body-nav">
                              Placeholder content for this accordion, which is
                              intended to demonstrate the
                              <code>.accordion-flush</code> class. This is the
                              second item's accordion body. Let's imagine this
                              being filled with some actual content.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-item-nav">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button accordion-button-nav collapsed d-flex justify-content-end gap-1"
                        dir="ltr"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseThree"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <span className="text-dark">باب الثاني</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseThree"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body accordion-body-nav">
                        <div className="accordion-body accordion-body-nav">
                          <Link
                            href={"./"}
                            className="text-decoration-none text-dark"
                          >
                            عااااا
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-item-nav">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button accordion-button-nav collapsed d-flex justify-content-end gap-1"
                        dir="ltr"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSeven"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <span className="text-dark">باب الثالث</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSeven"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body accordion-body-nav">
                        <div className="accordion-body accordion-body-nav">
                          Placeholder content for this accordion, which is
                          intended to demonstrate the{" "}
                          <code>.accordion-flush</code> class. This is the third
                          item's accordion body. Nothing more exciting happening
                          here in terms of content, but just filling up the
                          space to make it look, at least at first glance, a bit
                          more representative of how this would look in a
                          real-world application.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade border-0"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex="0"
              >
                <div className="accordion" id="accordionFlushExample-2">
                  <div className="accordion-item accordion-item-nav">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button accordion-button-nav collapsed d-flex justify-content-end gap-1"
                        dir="ltr"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFour"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        <span className="text-dark">Accordion Item #1</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFour"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body accordion-body-nav">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the
                        <code>.accordion-flush</code> class. This is the first
                        item's accordion body.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-item-nav">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button accordion-button-nav collapsed d-flex justify-content-end gap-1"
                        dir="ltr"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseFive"
                        aria-expanded="false"
                        aria-controls="flush-collapseTwo"
                      >
                        <span className="text-dark">Accordion Item #2</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseFive"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body accordion-body-nav">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the
                        <code>.accordion-flush</code> class. This is the second
                        item's accordion body. Let's imagine this being filled
                        with some actual content.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item accordion-item-nav">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button accordion-button-nav collapsed d-flex justify-content-end gap-1"
                        dir="ltr"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseSix"
                        aria-expanded="false"
                        aria-controls="flush-collapseThree"
                      >
                        <span className="text-dark">Accordion Item #3</span>
                      </button>
                    </h2>
                    <div
                      id="flush-collapseSix"
                      className="accordion-collapse collapse"
                    >
                      <div className="accordion-body accordion-body-nav">
                        Placeholder content for this accordion, which is
                        intended to demonstrate the
                        <code>.accordion-flush</code> class. This is the third
                        item's accordion body. Nothing more exciting happening
                        here in terms of content, but just filling up the space
                        to make it look, at least at first glance, a bit more
                        representative of how this would look in a real-world
                        application.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!--ACCORDIONS FOR TABS--> */}
          </div>
          {/* <!--OFFCANCAS PROFILE--> */}
          <div className="Profile position-absolute bottom-0 end-0 w-100">
            <div className="position-relative w-100 px-3">
              <div className="d-flex bg-light-green w-100 border-top-1 align-items-center gap-3 text-profile-color justify-content-between py-2">
                <div className="d-flex align-items-center gap-3">
                  <Link href={"./"} className="text-profile-color">
                    <i className="fa-regular fa-circle-user fa-2xl"></i>
                  </Link>
                  <span className="h3 m-0">محمد حسین علیزاده</span>
                </div>
                <div className="dropup">
                  <button
                    className="btn border-0 p-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="fa-solid fa-caret-left"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end bg-very-light-green mb-3 rounded-4 p-0">
                    <li>
                      <Link
                        className="dropdown-item rounded-4 rounded-bottom-0"
                        href={"./"}
                      >
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href={"./"}>
                        Action two
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item rounded-4 rounded-top-0"
                        href={"./"}
                      >
                        Action three
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <!--OFFCANCAS PROFILE--> */}
        </div>
      </div>
      {/* <!-- OFFCANVAS NAV --> */}

      {/* <!-- PRAYER BOX --> */}
      <section className="prayer-box pt-4">
        <div className="container">
          <rtLinkicle className="text-of-prayer pt-2 px-2 px-md-0 pb-3 mb-5 d-flex flex-column align-items-center gap-4">
            <div className="head-prayer">
              <img
                src="/images/in-the-name-of-god.svg"
                alt="in the name of god in head of text prayer"
              />
            </div>
            <p className="prayer">
              <span className="text">
                متن توضیحی متن توضیحی متن توضیحی متن توضیحی
              </span>
              السَّلامُ عَلَیْکَ یَا أَبا عَبْدِاللّٰهِ، السَّلامُ عَلَیْکَ یَا
              ابْنَ رَسُولِ اللّٰهِ، السَّلامُ عَلَیْکَ یا خِیَرَهَ اللّٰهِ
              وَابْنَ خِیرَتِه Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Amet, assumenda dolore earum est itaque laborum
              magnam maxime mollitia nostrum odit officiis quaerat repudiandae
              sapiente sint soluta vitae voluptatem? Accusamus, aspernatur at
              culpa debitis delectus dicta eius eligendi facere fugiat, ipsum
              iure libero qui quia repudiandae sequi similique vel veritatis
              voluptatibus.
              <span className="quran">
                متن قرآن متن قرآن متن قرآن متن قرآن متن قرآن
              </span>
            </p>
          </rtLinkicle>
        </div>
      </section>
      {/* <!-- PRAYER BOX --> */}

      {/* <!-- FOOTER --> */}
      <footer className="footer bg-very-light-green position-fixed d-flex w-100 bottom-0 bg-very-light-green footer-z">
        <div className="container">
          <div className="d-flex py-3 justify-content-between align-items-center">
            <div className="themes">
              <button
                className="btn setting-btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom-setting"
                aria-controls="offcanvasBottom-setting"
              >
                <i className="fa-regular fa-gear fa-xl"></i>
              </button>
            </div>
            <div className="speed">
              <button
                className="btn speed-btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom-speed"
                aria-controls="offcanvasBottom-speed"
              >
                1.00x
              </button>
            </div>
            <div className="play">
              <button type="button" className="btn border-0 p-0">
                <img src="/images/play-icon.svg" alt="play icon" />
              </button>
            </div>
            <div className="singer">
              <button
                className="btn singer-btn"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasBottom-singer"
                aria-controls="offcanvasBottom-singer"
              >
                باسم الکربلائي
              </button>
            </div>
            <div className="select-box d-flex justify-content-end">
              <button type="button" className="btn border-0">
                <i className="fa-solid fa-ellipsis-vertical"></i>
              </button>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- FOOTER --> */}

      {/* <!-- OFFCANVAS SETTING FOOTER --> */}
      <div
        className="offcanvas offcanvas-bottom offcanvas-setting pb-5 z-in-footer-offcanvas h-75 bg-very-light-green p-3 mb-3"
        tabIndex="-1"
        id="offcanvasBottom-setting"
        aria-labelledby="offcanvasBottomLabel"
        data-bs-backdrop="true"
      >
        <div className="offcanvas-body bg-white rounded-3 d-flex flex-column overflow-hidden">
          <div
            className="nav nav-tabs d-flex justify-content-around"
            id="nav-tab"
            role="tablist"
          >
            <button
              className="nav-link p-2 nav-tab-setting-width active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              <span className="tab-footer-setting">
                <i className="fa-regular fa-palette fa-lg"></i>
              </span>
            </button>
            <button
              className="nav-link nav-tab-setting-width p-2"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              <span className="tab-footer-setting">
                <i className="fa-regular fa-text-size fa-lg"></i>
              </span>
            </button>
            <button
              className="nav-link nav-tab-setting-width p-2"
              id="nav-disabled-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-disabled"
              type="button"
              role="tab"
              aria-controls="nav-disabled"
              aria-selected="false"
            >
              <span className="tab-footer-setting">
                <i className="fa-regular fa-font fa-lg"></i>
              </span>
            </button>
          </div>
          <div className="tab-content" id="nav-tabContent">
            <div
              className="tab-pane fade show active p-3"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabIndex="0"
            >
              <div className="themes d-flex flex-column justify-content-between align-items-center">
                <img src="/images/light-theme.png" alt="theme light" />
                <img src="/images/theme-sepia.png" alt="theme sepia" />
                <img src="/images/dark-theme.png" alt="theme dark" />
                <img src="/images/theme-sepia.png" alt="theme sepia" />
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
              tabIndex="0"
            >
              <div className="change-font-size d-flex flex-column justify-content-center align-items-center gap-4">
                <div
                  id="text-to-change-font-size"
                  className="text-to-change-font-size shadow-light d-flex align-items-center justify-content-center"
                >
                  اللّٰهِ
                </div>
                <div className="buttons-for-change-font-size d-flex justify-content-center gap-3">
                  <button className="btn border decrease">
                    <span>
                      <i className="fa-regular fa-minus fa-xs"></i>
                      <i className="fa-regular fa-a"></i>
                    </span>
                  </button>
                  <input
                    type="number"
                    name="font-size"
                    id="fontSize"
                    className="form-control w-25 text-center"
                    readOnly
                  />
                  <button className="btn border increase">
                    <span>
                      <i className="fa-regular fa-plus fa-xs"></i>
                      <i className="fa-regular fa-a"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade P-3"
              id="nav-disabled"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabIndex="0"
            >
              <div
                className="change-font-family d-flex flex-column gap-4 px-3 pt-3"
                dir="ltr"
              >
                <div className="change-font-family-quran">
                  <h3>Quran Font style :</h3>
                  <div className="font-family-box-select d-flex flex-column gap-3">
                    <div
                      className="font-family-box shadow-light font-family-box-active d-flex rounded-3 justify-content-around align-items-center"
                      id="font-family-translate-1"
                      dir="rtl"
                    >
                      <span>نستعلیق :</span>
                      <img
                        src="/images/font-family-1.png"
                        alt="font-family-1"
                      />
                    </div>
                    <div
                      className="font-family-box shadow-light d-flex rounded-3 justify-content-around align-items-center"
                      id="font-family-translate-2"
                      dir="rtl"
                    >
                      <span>نستعلیق :</span>
                      <img
                        src="/images/font-family-1.png"
                        alt="font-family-1"
                      />
                    </div>
                    <div
                      className="font-family-box shadow-light d-flex rounded-3 justify-content-around align-items-center"
                      id="font-family-translate-3"
                      dir="rtl"
                    >
                      <span>نستعلیق :</span>
                      <img
                        src="/images/font-family-1.png"
                        alt="font-family-1"
                      />
                    </div>
                  </div>
                </div>
                <div className="change-font-family-translate">
                  <h3>translation Font style :</h3>
                  <div className="font-family-box-select d-flex flex-column gap-3">
                    <div
                      className="font-family-box shadow-light font-family-box-active d-flex rounded-3 justify-content-around align-items-center"
                      id="font-family-1"
                      dir="rtl"
                    >
                      <span>نستعلیق :</span>
                      <img
                        src="/images/font-family-1.png"
                        alt="font-family-1"
                      />
                    </div>
                    <div
                      className="font-family-box shadow-light d-flex rounded-3 justify-content-around align-items-center"
                      id="font-family-2"
                      dir="rtl"
                    >
                      <span>نستعلیق :</span>
                      <img
                        src="/images/font-family-1.png"
                        alt="font-family-1"
                      />
                    </div>
                    <div
                      className="font-family-box shadow-light d-flex rounded-3 justify-content-around align-items-center"
                      id="font-family-3"
                      dir="rtl"
                    >
                      <span>نستعلیق :</span>
                      <img
                        src="/images/font-family-1.png"
                        alt="font-family-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OFFCANVAS SETTING FOOTER --> */}

      {/* <!-- OFFCANVAS SPEED FOOTER --> */}
      <div
        className="offcanvas offcanvas-bottom offcanvas-speed pb-5 z-in-footer-offcanvas h-50 bg-very-light-green p-4 mb-3"
        tabIndex="-1"
        id="offcanvasBottom-speed"
        aria-labelledby="offcanvasBottomLabel"
        data-bs-backdrop="true"
      >
        <div className="offcanvas-body bg-white rounded-4 d-flex flex-column overflow-hidden justify-content-center px-4">
          <div className="change-speed d-flex flex-column justify-content-center align-items-center gap-4">
            <div
              id="speed-value"
              className="text-to-change-speed d-flex align-items-center justify-content-center fw-bolder fs-3"
            >
              1.00x
            </div>
            <div className="speed-box shadow-light">
              <form action="" encType="multipart/form-data">
                <div className="d-flex rounded-pill">
                  <div className="d-flex rounded-pill w-100 align-items-center">
                    <button
                      type="button"
                      className="btn p-3 rounded-0 rounded-start-4"
                    >
                      <i className="fa-regular fa-plus"></i>
                    </button>
                    <input
                      type="range"
                      name="rangeInput"
                      className="form-range"
                      min="1"
                      max="6"
                      step="0.5"
                    />
                    <button
                      type="button"
                      className="icon-search btn p-3 rounded-0 rounded-end-4"
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OFFCANVAS SPEED FOOTER --> */}

      {/* <!-- OFFCANVAS SINGER FOOTER --> */}
      <div
        className="offcanvas offcanvas-bottom offcanvas-singer pb-5 z-in-footer-offcanvas h-75 bg-very-light-green p-3 mb-3"
        tabIndex="-1"
        id="offcanvasBottom-singer"
        aria-labelledby="offcanvasBottomLabel"
        data-bs-backdrop="true"
      >
        <div className="offcanvas-body bg-white d-flex flex-column rounded-3 p-1">
          <div className="search-singer p-3">
            <div className="form-box">
              <form action="" encType="multipart/form-data">
                <div className="d-flex rounded-pill">
                  <div className="d-flex rounded-pill w-100">
                    <input
                      type="text"
                      name="name"
                      className="input-search form-control border-0 rounded-0 rounded-start-4 bg-very-light-green"
                      placeholder="البحث في المفاتیح الجنان"
                    />
                    <button
                      type="button"
                      className="icon-search btn p-2 rounded-0 rounded-end-4 bg-very-light-green"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="boorder-singer border w-100"></div>
          <div className="singers d-flex flex-column gap-3 p-3 overflow-y-auto">
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/dark-theme.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/singer-1.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/singer-1.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/singer-1.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/dark-theme.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/singer-1.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/singer-1.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/singer-1.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/dark-theme.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/singer-1.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/singer-1.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/singer-1.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/dark-theme.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
            <div className="singer-box shadow-light d-flex justify-content-center align-items-center gap-5 position-relative">
              <img
                className="img-singer rounded-circle position-absolute start-0"
                src="/images/singer-1.png"
                alt="photo of singer one"
              />
              <span className="py-2">عبد الحي آل قمبر</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- OFFCANVAS SINGER FOOTER --> */}
    </>
  );
}
