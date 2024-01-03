import React, { useEffect } from "react";
import Link from "next/link";

import BtnOffcanvasSetting from "../../../components/reader/settingFooter/btnOffcanvasSetting";
import BtnDecFont from "../../../components/reader/settingFooter/btnDecFont";
import BtnIncFont from "../../../components/reader/settingFooter/btnIncFont";
import InputFont from "../../../components/reader/settingFooter/inputFont";
import FontChange from "../../../components/reader/settingFooter/fontChange";
import BtnOffcanvasSpeed from "../../../components/reader/speedFooter/btnOffcanvasSpeed";
import BtnOffcanvasSinger from "../../../components/reader/singerFooter/btnOffcanvasSinger";
import SingersChange from "../../../components/reader/singerFooter/singersChange";
import HeaderReader from "../../../components/reader/header";


//document.body.scrollTop + sticky.getBoundingClientRect().top
//window.pageYOffset + sticky.getBoundingClientRect().top
//yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
// sticky.getBoundingClientRect().top - header.getBoundingClientRect().height - 2         its the best way


export async function getServerSideProps(ctx) {

  const res = await fetch(`https://rafed.net/mafatih/${ctx.params.prayerName}`);
  const data = await res.json();

  return { props: {data} };
}


export default function ReaderPage({data}) {
  useEffect(() => {

    // sticky subtitle
    const sticky = document.querySelectorAll(".stickySubtitle-prayer");
    const header = document.querySelector(".header");
    let heightHeader = header.getBoundingClientRect().height;


    window.addEventListener("scroll", function () {
      sticky.forEach(function (stickyItem) {
        let elementTop = stickyItem.getBoundingClientRect().top;

        if (!document.querySelector(".sticky-active")) {
          if (elementTop - heightHeader - 2 < 1) {
            console.log("resid");
            stickyItem.classList.add("sticky-active");
            stickyItem.style.position = "sticky";
            stickyItem.style.top = heightHeader + 2 + "px";
          }
        } else {
          let activeElem = document.querySelector(".sticky-active");
          let activeElemHeight = activeElem.getBoundingClientRect().height;
          let activeElemTop = activeElem.getBoundingClientRect().top;

          if (elementTop - heightHeader - 2 - activeElemHeight < 1) {
            console.log("resid 2");

            // for(let i = 0; i > 10; i++) {

            // }

            activeElem.classList.remove("sticky-active");
            activeElem.style.top = heightHeader + 2 + "px";
            activeElem.style.position = "static";

            stickyItem.classList.add("sticky-active");
            stickyItem.style.position = "sticky";
            stickyItem.style.top = heightHeader + 2 + "px";
          }
        }
      });
    });
    // sticky subtitle


    // highlight Faraz
    
    const ArabicTextFaraz = document.querySelectorAll('.arabicText-Faraz')

    ArabicTextFaraz.forEach((arabicText) => {
      
      arabicText.addEventListener('click', function (event) {
        ArabicTextFaraz.forEach((activeFaraz) => {
          activeFaraz.classList.remove('highlight-reader')
        })
        event.target.closest('.arabicText-Faraz').classList.add('highlight-reader')
      })
    })
    
    // highlight Faraz


    // play song //
    
    const farazActive = document.querySelector('.highlight-reader')
    const playBtn = document.querySelector('playBtn')

    // playBtn.addEventListener('click', function () {
    //   console.log("first")
    // }))
    
    // play song //


  }, []); //for useEffect
 
  return (
    <>

      <HeaderReader/>

      {/* <!-- PRAYER BOX --> */}
      <main className="prayer pt-3 pt-md-4">
        <div className="prayer-box pb-3 mb-5">
          <div className="besmellah-prayer d-flex justify-content-center align-items-center pb-4">
            <img
              src="/images/in-the-name-of-god.svg"
              alt="in the name of god in head of text prayer"
            />
          </div>
          <div className="text-prayer">
            {data.items.map((item) => {
              if (item.type == "title")
                return (
                  <div className="stickySubtitle-prayer d-flex align-items-center p-3 my-3">
                    <h3 className="mb-0">{item.body}</h3>
                  </div>
                );

              if (item.type == "descriptions")
                return (
                  <div className="desciption-prayer px-3">
                    <p>{item.body}</p>
                  </div>
                );

              if (item.type == "list")
                return (
                  <div className="desciption-prayer px-3 d-flex flex-wrap">
                    {item.body.map((itemLink) => {
                      if (itemLink.type == "descriptions") {
                        return <p>{itemLink.body}</p>;
                      }
                      if (itemLink.type == "link") {
                        return (
                          <Link href={itemLink.link}>{itemLink.body}</Link>
                        );
                      }
                    })}
                  </div>
                );

              if (item.type == "item")
                return (
                  <div className="faraz d-flex flex-column">
                    <div className="arabicText-Faraz cursor-pointer">
                      <h6 className="mb-0 py-2 px-3 px-md-4">{item.body}</h6>
                    </div>
                    <div className="translateText-Faraz py-1 px-3 px-md-4">
                      <h6 className="mb-0">{item.translate}</h6>
                    </div>
                  </div>
                );
            })}
          </div>
        </div>
      </main>
      {/* <!-- PRAYER BOX --> */}

      {/* <!-- FOOTER --> */}
      <footer className="footer footer-reader bg-very-light-green position-fixed d-flex w-100 bottom-0 bg-very-light-green footer-z">
        <div className="container">
          <div className="d-flex py-3 justify-content-between align-items-center">
            <div className="themes">
              <BtnOffcanvasSetting />
            </div>
            <div className="speed">
              <BtnOffcanvasSpeed />
            </div>
            <div className="playBtn">
              <button type="button" className="btn border-0 p-0">
                <img src="/images/play-icon.svg" alt="play icon" />
              </button>
            </div>
            <div className="singer">
              <BtnOffcanvasSinger />
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
              className="tab-pane tab-pane-reader fade show active p-3"
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
              className="tab-pane tab-pane-reader fade"
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
                  <BtnDecFont />
                  <InputFont />
                  <BtnIncFont />
                </div>
              </div>
            </div>
            <div
              className="tab-pane tab-pane-reader fade P-3"
              id="nav-disabled"
              role="tabpanel"
              aria-labelledby="nav-disabled-tab"
              tabIndex="0"
            >
              <FontChange />
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
          <SingersChange />
        </div>
      </div>
      {/* <!-- OFFCANVAS SINGER FOOTER --> */}
    </>
  );
}
