import React from "react";
import HeaderC from "../../../components/header";
import FilterInput from "../../../components/index/filterInput";
import Link from "next/link";
import FooterC from "../../../components/footer";

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

        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className="accordion-item accordion-item-sr">
            <h2 className="accordion-header accordion-header-sr">
              <button
                className="accordion-button accordion-button-sr d-flex justify-content-between align-items-center"
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
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body accordion-body-sr d-flex flex-column">
                <div className="textFind-title p-3">
                  <div className="titleOf-textFind">
                    زیارت
                    <span className="white-space"> </span>
                    <span>
                      <Link className="textFinded" href={"./"}>عاشورا</Link>
                    </span>
                    <span className="white-space"> </span>
                    امام حسین
                  </div>
                </div>
                <div className="textFind-title-desciption p-3">
                  <div className="title-textFind">
                    زیارت امام حسین(ع) در روز
                    <span className="white-space"> </span>
                    <span>
                      <Link className="textFinded" href={"./"}>عاشورا</Link>
                    </span>
                    <span className="white-space"> </span>
                  </div>
                  <div className="description-textFind">
                    <p>
                      <span className="three-point">...</span>
                      <span className="white-space"> </span>
                      بدان که زیارت روایتشده برای روز{" "}
                      <span>
                        <Link className="textFinded" href={"./"}>عاشورا</Link>
                      </span>{" "}
                      چند زیارت است و ما در اینجا به خاطر رعایت مختصرنویسی فقط
                      به بیان<span className="three-point">...</span>ما در اینجا
                      به خاطر رعایت مختصرنویسی فقط به بیان اعمال روز عاشورا نیز
                      زیارتی را نقل کردم
                    </p>
                  </div>
                </div>
                <div className="textFind-description p-3">
                  <div className="title-textFind">
                    زیارت‌های امام حسین(ع) در ایام خاص
                  </div>
                  <div className="description-textFind">
                    <p>
                      <span className="three-point">...</span>
                      <span className="white-space"> </span>
                      شب های قدر پنجم زیارت آن حضرت در عید فطر و قربان ششم زیارت
                      آن حضرت در روز عرفه هفتم زیارت
                      <span className="white-space"> </span>
                      <span>
                        <Link className="textFinded" href={"./"}>عاشورا</Link>
                      </span>
                      <span className="white-space"> </span>
                      <span className="three-point">...</span>
                    </p>
                  </div>
                </div>
                <div className="textFind-title-desciption p-3">
                  <div className="title-textFind">
                    زیارت امام حسین(ع) در روز
                    <span className="white-space"> </span>
                    <span>
                      <Link className="textFinded" href={"./"}>عاشورا</Link>
                    </span>
                    <span className="white-space"> </span>
                  </div>
                  <div className="description-textFind">
                    <p>
                      <span className="three-point">...</span>
                      <span className="white-space"> </span>
                      بدان که زیارت روایتشده برای روز{" "}
                      <span>
                        <Link className="textFinded" href={"./"}>عاشورا</Link>
                      </span>{" "}
                      چند زیارت است و ما در اینجا به خاطر رعایت مختصرنویسی فقط
                      به بیان<span className="three-point">...</span>ما در اینجا
                      به خاطر رعایت مختصرنویسی فقط به بیان اعمال روز عاشورا نیز
                      زیارتی را نقل کردم
                    </p>
                  </div> 
                </div>
                <div className="textFind-title p-3">
                  <div className="titleOf-textFind">
                    زیارت
                    <span className="white-space"> </span>
                    <span>
                      <Link className="textFinded" href={"./"}>عاشورا</Link>
                    </span>
                    <span className="white-space"> </span>
                    امام حسین
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item accordion-item-sr">
            <h2 className="accordion-header accordion-header-sr">
              <button
                className="accordion-button accordion-button-sr d-flex justify-content-between align-items-center"
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
              className="accordion-collapse collapse show"
            >
              <div className="accordion-body accordion-body-sr">
              <div className="textFind-description p-3">
                  <div className="title-textFind">
                    زیارت‌های امام حسین(ع) در ایام خاص
                  </div>
                  <div className="description-textFind">
                    <p>
                      <span className="three-point">...</span>
                      <span className="white-space"> </span>
                      شب های قدر پنجم زیارت آن حضرت در عید فطر و قربان ششم زیارت
                      آن حضرت در روز عرفه هفتم زیارت
                      <span className="white-space"> </span>
                      <span>
                        <Link className="textFinded" href={"./"}>عاشورا</Link>
                      </span>
                      <span className="white-space"> </span>
                      <span className="three-point">...</span>
                    </p>
                  </div>
                </div>
                <div className="textFind-description p-3">
                  <div className="title-textFind">
                    زیارت‌های امام حسین(ع) در ایام خاص
                  </div>
                  <div className="description-textFind">
                    <p>
                      <span className="three-point">...</span>
                      <span className="white-space"> </span>
                      اعمال روز عاشورا
... ماتم داشته باشند به صورتی که در ماتم عزیزترین اولاد و اقوام خود اشتغال میورزند و آن حضرت را به زیارت عاشورا ... از حضرت رضا علیه السلام روایت شده هرکه کوشیدن در حوائج خود را در روز عاشورا ترک کند و به دنبال کاری ... السما یوم عاشورا یا مسکن سفینه نوح علی الجودی یوم عاشورا یا غیاث ابراهیم من النار یوم عاشورا ... ادریس به آسمان در روز عاشورا ای آرامدهنده کشتی نوح بر جودی در روز عاشورا ای فریادرس ابراهیم از آتش در ... روز عاشورا ...
                      <span className="white-space"> </span>
                      <span>
                        <Link className="textFinded" href={"./"}>عاشورا</Link>
                      </span>
                      <span className="white-space"> </span>
                      <span className="three-point">...</span>
                    </p>
                  </div>
                </div>
              <div className="textFind-description p-3">
                  <div className="title-textFind">
                    زیارت‌های امام حسین(ع) در ایام خاص
                  </div>
                  <div className="description-textFind">
                    <p>
                      <span className="three-point">...</span>
                      <span className="white-space"> </span>
                      شب های قدر پنجم زیارت آن حضرت در عید فطر و قربان ششم زیارت
                      آن حضرت در روز عرفه هفتم زیارت
                      <span className="white-space"> </span>
                      <span>
                        <Link className="textFinded" href={"./"}>عاشورا</Link>
                      </span>
                      <span className="white-space"> </span>
                      <span className="three-point">...</span>
                    </p>
                  </div>
                </div>
                <div className="textFind-description p-3">
                  <div className="title-textFind">
                    زیارت‌های امام حسین(ع) در ایام خاص
                  </div>
                  <div className="description-textFind">
                    <p>
                      <span className="three-point">...</span>
                      <span className="white-space"> </span>
                      اعمال روز عاشورا
... ماتم داشته باشند به صورتی که در ماتم عزیزترین اولاد و اقوام خود اشتغال میورزند و آن حضرت را به زیارت عاشورا ... از حضرت رضا علیه السلام روایت شده هرکه کوشیدن در حوائج خود را در روز عاشورا ترک کند و به دنبال کاری ... السما یوم عاشورا یا مسکن سفینه نوح علی الجودی یوم عاشورا یا غیاث ابراهیم من النار یوم عاشورا ... ادریس به آسمان در روز عاشورا ای آرامدهنده کشتی نوح بر جودی در روز عاشورا ای فریادرس ابراهیم از آتش در ... روز عاشورا ...
                      <span className="white-space"> </span>
                      <span>
                        <Link className="textFinded" href={"./"}>عاشورا</Link>
                      </span>
                      <span className="white-space"> </span>
                      <span className="three-point">...</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Section */}
      </main>
      <FooterC/>
    </>
  );
}
