import React from "react";
import HeaderC from "../../../components/header";
import FooterC from "../../../components/footer";

export default function CalendarPage() {
  return (
    <>
      <HeaderC />
      <main>
        <div className="d-lg-flex">
          {/* <!-- CALENDER --> */}
          <section className="bg-light-green p-3 col-12 col-lg-6">
            <div className="container bg-very-light-green rounded-4 py-3 p-4">
              <div className="calender-sections d-flex flex-column">
                <div className="calender-head d-flex justify-content-between align-items-center py-3 position-relative">
                  <button type="button" className="btn border-0">
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                  <div className="calender-header d-flex flex-column gap-2 position-relative">
                    <div className="selected-date-type d-flex align-items-center">
                      <button
                        className="dropdown btn btn-show-months border-0"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-chevron-down fa-xs"></i>
                      </button>

                      {/* <!-- MONTH BOX --> */}
                      <ul className="dropdown-menu dropdown-center months bg-light-green p-2 py-1">
                        <li className="month-box w-100">
                          <button className="btn w-100">محرم</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">صفر</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">ربیع الاول</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">ربیع الثانی</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">جمادی الاول</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">جمادی الثانی</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">رجب</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">شعبان</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">رمضان</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">شوال</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">ذی القعده</button>
                        </li>
                        <li className="month-box w-100">
                          <button className="btn w-100">ذی الحجه</button>
                        </li>
                      </ul>
                      {/* <!-- MONTH BOX --> */}

                      <span className="text-center fw-bolder">
                        محرم - صفر - 1445
                      </span>

                      <button
                        className="dropdown btn btn-show-months border-0"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="fa-solid fa-chevron-down fa-xs"></i>
                      </button>

                      {/* <!-- SEARCH YEAR --> */}
                      <ul className="dropdown-menu dropdown-center search-year-box bg-light-green p-2 py-1">
                        <li className="form-box p-3">
                          <form action="" encType="multipart/form-data">
                            <div className="d-flex rounded-pill">
                              <div className="d-flex rounded-pill w-100">
                                <input
                                  type="text"
                                  name="name"
                                  className="input-search form-control border-0 rounded-0 rounded-start-4 bg-very-light-green"
                                  placeholder="برو به سال..."
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
                        </li>
                      </ul>
                      {/* <!-- SEARCH YEAR --> */}
                    </div>
                    <div className="other-date-type text-center">
                      <span className="fw-bolder">
                        July - August 2023
                        <br />
                        مرداد ۱۴۰۲
                      </span>
                    </div>
                  </div>
                  <button type="button" className="btn border-0">
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                </div>
                <div className="calender-content shadow-light d-flex flex-column gap-3 p-3 px-4 mb-3 rounded-4">
                  <div className="calender-weekdays bg-light-green d-flex justify-content-between gap-1 row flex-nowrap rounded-4">
                    <button type="button" className="day btn col">
                      ش
                    </button>
                    <button type="button" className="day btn col">
                      ی
                    </button>
                    <button type="button" className="day btn col">
                      د
                    </button>
                    <button type="button" className="day btn col">
                      س
                    </button>
                    <button type="button" className="day btn col">
                      چ
                    </button>
                    <button type="button" className="day btn col">
                      پ
                    </button>
                    <button type="button" className="day btn col">
                      ج
                    </button>
                  </div>
                  <div className="days d-flex flex-column gap-1">
                    <div className="d-flex justify-content-between gap-1 row flex-nowrap rounded-4">
                      <button
                        type="button"
                        className="day btn col disable-days disabled"
                      >
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">29</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font disable-days">
                              14
                            </span>
                            <span className="ghamari-date other-date-font disable-days">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="day btn col disable-days disabled"
                      >
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">30</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font disable-days">
                              14
                            </span>
                            <span className="ghamari-date other-date-font disable-days">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="day btn col disable-days disabled"
                      >
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">31</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font disable-days">
                              14
                            </span>
                            <span className="ghamari-date other-date-font disable-days">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col today">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">1</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">2</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">3</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col holiday">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">4</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className="d-flex justify-content-between gap-1 row flex-nowrap rounded-4">
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">5</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="day btn col auspicious-day"
                        data-bs-toggle="modal"
                        data-bs-target="#staticModalBackdrop"
                      >
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">6</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <div
                        className="modal fade"
                        id="staticModalBackdrop"
                        data-bs-backdrop="static"
                        data-bs-keyboard="false"
                        tabIndex="-1"
                        aria-labelledby="staticBackdropLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable justify-content-center">
                          <div className="modal-content">
                            <div className="modal-header align-items-center">
                              <h2
                                className="modal-title fs-6 text-brown fw-bolder"
                                id="staticBackdropLabel"
                              >
                                اعمال الخاصة في لیلة 9 من محرم
                              </h2>
                              <button
                                type="button"
                                className="btn-close p-1 m-0"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div className="modal-body">
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">1.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">2.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">3.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">4.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">5.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">2.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">3.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">4.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">5.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">2.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">3.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">4.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                              <div className="actions-for-days-of-the-week align-items-center fs-5">
                                <span className="text-brown ps-0">5.</span>
                                <p className="d-inline-block m-0">احیاء</p>
                              </div>
                            </div>
                            <div className="modal-footer p-2"></div>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">7</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">8</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">9</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">10</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col holiday">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">11</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className="d-flex justify-content-between gap-1 row flex-nowrap rounded-4">
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">12</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">13</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">14</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">15</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">16</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">17</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col holiday">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">18</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className="d-flex justify-content-between gap-1 row flex-nowrap rounded-4">
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">19</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">20</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">21</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">22</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">23</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">24</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">25</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                    <div className="d-flex justify-content-between gap-1 row flex-nowrap rounded-4">
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">26</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">27</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">28</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">29</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button type="button" className="day btn col">
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">30</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font">
                              14
                            </span>
                            <span className="ghamari-date other-date-font">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="day btn col disable-days disabled"
                      >
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">1</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font disable-days">
                              14
                            </span>
                            <span className="ghamari-date other-date-font disable-days">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                      <button
                        type="button"
                        className="day btn col disable-days disabled"
                      >
                        <span className="d-flex flex-column">
                          <span className="shamsi-date date-font">29</span>
                          <span className="other-date d-flex justify-content-evenly">
                            <span className="miladi-date other-date-font disable-days">
                              14
                            </span>
                            <span className="ghamari-date other-date-font disable-days">
                              8
                            </span>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="go-today">
                  <button
                    type="button"
                    className="btn-today btn w-100 shadow-very-light"
                  >
                    برو به امروز
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* <!-- CALENDER --> */}

          {/* <!--         actions section --> */}
          <section className="celebration bg-actions pt-2 pb-4 border-top-1 border-top-lg-0 col-12 col-lg-6">
            <div className="actions-container container d-flex flex-column align-items-start pb-1">
              <div className="head-of-prayers">
                <h3 className="text-color-prayers py-3 mb-0">مناسبت ها</h3>
              </div>
              <ul className="actions">
                <li className="actions-for-days-of-the-week align-items-center fs-5">
                  <p className="d-inline-block m-0">احیاء</p>
                </li>
                <li className="actions-for-days-of-the-week align-items-center fs-5">
                  <p className="d-inline-block m-0">احیاء</p>
                </li>
                <li className="actions-for-days-of-the-week align-items-center fs-5">
                  <p className="d-inline-block m-0">احیاء</p>
                </li>
                <li className="actions-for-days-of-the-week align-items-center fs-5">
                  <p className="d-inline-block m-0">احیاء</p>
                </li>
                <li className="actions-for-days-of-the-week align-items-center fs-5">
                  <p className="d-inline-block m-0">احیاء</p>
                </li>
              </ul>
              <div className="button-for-actions align-self-center pt-3">
                <button
                  type="button"
                  className="btn bg-white shadow rounded-pill fs-6 d-flex justify-content-center align-items-center gap-2"
                >
                  <span className="opacity-50">اقراء المزید...</span>
                  <i className="fa-regular fa-circle-plus fa-xl"></i>
                </button>
              </div>
            </div>
          </section>
          {/* <!--         actions section --> */}
        </div>
      </main>
      <FooterC />
    </>
  );
}
