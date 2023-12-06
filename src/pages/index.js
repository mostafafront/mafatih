import React, {useEffect} from "react";
import FooterC from "../../components/footer";
import HeaderC from "../../components/header";

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; //میتونه نباشه


export default function Home() {


  useEffect(() => {
    require('jquery/dist/jquery')
    require('owl.carousel/dist/owl.carousel')
  },[])
  
  useEffect(() => {
    $(document).ready(function () {
      $(".owl-carousel").owlCarousel({
        rtl: true,
        loop: true,
        dots: false,
        margin: 10,
        responsiveClass: true,
        responsive: {
          275: {
            items: 1
          },
          320: {
            items: 2.4
          },
          375: {
            items: 2.5
          },
          425: {
            items: 2.7
          },
          768: {
            items: 3.5
          },
          1024: {
            items: 4.5
          },
          1440: {
            items: 5.5
          }
          
        }
      });
    });
  },[])


  return (
    <>
    <HeaderC/>
    <main>
			<section className="bg-photo">
				{/* <!-- search box --> */}
				<div className="container pt-5 px-4">
					<div className="form-box py-3">
						<form action="" encType="multipart/form-data">
							<div className="form-items d-flex rounded-pill bg-very-light-green">
								<button type="button" className="filter-icon-2 btn p-2 rounded-0 rounded-start-5">
									<i className="fa-regular fa-sliders"></i></button>
								<input type="text"
									   name="name"
									   className="form-control border-0 rounded-0 bg-very-light-green"
									   placeholder="البحث في المفاتیح الجنان"/>
								<button type="button" className="btn p-2 rounded-0 rounded-end-5">
									<i className="fa-solid fa-magnifying-glass"></i></button>
							</div>
						</form>
					</div>
					{/* <!--         search box --> */}
					
					{/* <!-- FILTER BOX --> */}
					<div className="filter position-relative">
						<div id="filterBox-main"
							 className="filter-box filter-box-main flex-column bg-filter-box rounded-4 p-2 position-absolute top-0 w-100 z-3">
							<div className="filter-checks py-1 ps-1 form-check m-0">
								<input className="form-check-input me-2 ms-0" type="checkbox" value="" id="filter-check1"/>
								<label className="form-check-label filter-text-color" htmlFor="filter-check1">
									البحث في جمیع المواضیع
								</label>
							</div>
							<div className="filter-checks py-1 ps-1 form-check m-0">
								<input className="form-check-input me-2 ms-0" type="checkbox" value="" id="filter-check2"/>
								<label className="form-check-label filter-text-color" htmlFor="filter-check2">
									البحث في الزیاراة
								</label>
							</div>
							<div className="filter-checks py-1 ps-1 form-check m-0">
								<input className="form-check-input me-2 ms-0" type="checkbox" value="" id="filter-check3"/>
								<label className="form-check-label filter-text-color" htmlFor="filter-check3">
									البحث في الأدعیة
								</label>
							</div>
							<div className="filter-checks py-1 ps-1 form-check m-0">
								<input className="form-check-input me-2 ms-0" type="checkbox" value="" id="filter-check4"/>
								<label className="form-check-label filter-text-color" htmlFor="filter-check4">
									البحث في الآعمال
								</label>
							</div>
							<div className="filter-checks py-1 ps-1 form-check m-0">
								<input className="form-check-input me-2 ms-0" type="checkbox" value="" id="filter-check5"/>
								<label className="form-check-label filter-text-color" htmlFor="filter-check5">
									البحث في النص
								</label>
							</div>
						</div>
					</div>
					{/* <!-- FILTER BOX --> */}
					
					{/* <!-- calender --> */}
					<div className="calendar-home-page mt-3 text-white pb-4">
						<div className="calender-box calendar-box-width m-auto calendar-box-color rounded-3">
							<div className="d-flex flex-column align-items-center p-2">
								<div className="calender-item py-2 fs-5">
									<div className="w-100 text-center">
										<span className="text-brown">چهار شنه</span> ۱۱ <span className="text-brown">اسفند</span>
																				 ۱۴۰۲
									</div>
								</div>
								<div className="calender-item py-2 fs-5">
									<div className="w-100 text-center">
										<span className="text-brown">الارابعاء</span> ۱۱ <span className="text-brown">شعبان</span>
																				  ۱۴۴۶
									</div>
								</div>
								<div className="calender-item py-2">
									<div className="w-100 text-center">
										2022 <span className="text-brown">march</span> 11
										<span className="text-brown">wednesday</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!--             calender --> */}
					
					{/* <!--             message box --> */}
					<div className="message mt-3 pb-5">
						<div className="message-box message-box-width d-flex justify-content-center mx-auto">
							<img src="/images/home-prayer.svg"
								 alt="A text to inform the site user"
								 width="100%"/>
						</div>
					</div>
				</div>
				{/* <!--             message box --> */}
			</section>
			
			{/* <!--         mention-the-days-of-the-week --> */}
			<section className="bg-light-green">
				<div className="mention-the-days-of-the-week container px-4 d-flex flex-column">
					<h3 className="text-color-prayers pt-4">ذکر الیوم الاربعاء</h3>
					<div className="mention align-self-center pb-3">
						<img src="/images/preyer-of-days.png" alt="mention the days of the week" width="160"/>
					</div>
				</div>
			</section>
			{/* <!--         mention-the-days-of-the-week --> */}
			
			{/* <!--         actions section --> */}
			<section className="celebration bg-actions pt-2 pb-4 border-top-1">
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
						<button type="button" className="btn bg-white shadow rounded-pill fs-6 d-flex gap-2">
							<span className="opacity-50">اقراء المزید...</span>
							<i className="fa-regular fa-circle-plus fa-xl"></i>
						</button>
					</div>
				</div>
			</section>
			{/* <!--         actions section --> */}
			
			{/* <!--         profile section --> */}
			<section className="profile bg-light-green pt-1 border-top-1">
				<div className="container py-4 px-4">
					<div className="profile-information d-flex flex-column gap-3 align-items-center justify-content-center text-profile-color">
						<a href="#" className="text-profile-color"><i className="fa-regular fa-circle-user fa-2xl"></i></a>
						<div className="h3 m-0 fw-bolder">محمد حسین علیزاده</div>
					</div>
					<div className="profile-descriptions pt-4 d-flex justify-content-between">
						<div className="last-seen d-flex flex-column w-50">
							<div className="last-seen-head">
								<h3 className="text-profile-color">آخر مشاهدة</h3>
							</div>
							<ul className="last-seen-things">
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
						</div>
						<div className="last-search w-50 border-start-1 pe-3">
							<div className="last-search-head">
								<h3 className="text-profile-color">آخر بحث</h3>
							</div>
							<ul className="last-search-things">
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
						</div>
					</div>
				</div>
			</section>
			{/* <!--         profile section --> */}
			
			
			{/* <!--         action section 2 --> */}
			<section className="actions bg-actions pb-4 pt-2">
				<div className="actions-container container">
					<div className="head-of-actions">
						<h2 className="text-color-prayers py-3 mb-0">اعمال الیوم الأربعاء</h2>
					</div>
					<ul className="actions">
						<li className="actions-for-days-of-the-week align-items-center fs-5">
							<p className="d-inline-block m-0">احیاء</p>
						</li>
						<li className="actions-for-days-of-the-week align-items-center fs-5">
							<p className="d-inline-block m-0">احیاء</p>
						</li>
					</ul>
				</div>
			</section>
			{/* <!--         action section 2 --> */}
			
			{/* <!--         owl section --> */}
			<section className="owl-section bg-light-green py-3 pb-5">
				<div className="head-of-owl pt-2 container pb-2">
					<h3 className="text-color-prayers">ادعیة و زیاراة المعروفة</h3>
				</div>
				<div className="owl-carousel">
					<div className="item px-3">
						<a href="./reader.html"><img src="/images/owl-prayer.svg" alt="prayer"/></a>
					</div>
					<div className="item px-3">
						<a href="./reader.html"><img src="/images/owl-prayer.svg" alt="prayer"/></a>
					</div>
					<div className="item px-3">
						<a href="./reader.html"><img src="/images/owl-prayer.svg" alt="prayer"/></a>
					</div>
					<div className="item px-3">
						<a href="./reader.html"><img src="/images/owl-prayer.svg" alt="prayer"/></a>
					</div>
					<div className="item px-3">
						<a href="./reader.html"><img src="/images/owl-prayer.svg" alt="prayer"/></a>
					</div>
					<div className="item px-3">
						<a href="./reader.html"><img src="/images/owl-prayer.svg" alt="prayer"/></a>
					</div>
				</div>
			</section>
			{/* <!--         owl section         --> */}
		</main>
    <FooterC/>
    </>
  )
}
