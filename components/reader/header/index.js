import React from 'react'
import Link from "next/link";
import BtnMenu from '../../header/btnMenu';
import FilterOffcanvas from '../../header/filterOffcanvas';

export default function HeaderReader() {
  return (
    <>
          {/* <!--  HEADER  --> */}
          <header className="header position-sticky top-0 z-in-nav">
        <nav
          className="navbar bg-header radius-reader height-header w-100"
          dir="ltr"
        >
          <div className="container-fluid d-flex justify-content-between px-4">
            <div className="leftHeader-reader d-flex align-items-center">
              <div className="backHome-iconReader ms-3 ms-sm-4">
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
            <div
              className="titlePrayer d-flex justify-content-center align-items-center"
              dir="rtl"
            >
              <h1 className="titlePrayer-text mb-0">{data.title}</h1>
            </div>
            <div className="navbar-toggle navbar-toggle-reader d-flex justify-content-end">
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
    </>
  )
}
