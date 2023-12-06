import React from 'react'
import HeaderC from '../../../components/header'
import FooterC from '../../../components/footer'

export default function DonatePage() {
  return (
    <>
    <HeaderC/>
    {/* <!-- DONATE SECTION --> */}
		<main className="bg-light-green p-3">
			<div className="donate-section container py-4">
				<h2 className="fw-bolder">كن متبرعا شهريا</h2>
				<p>
					تساعدنا التبرعات الشهرية على تحسين موقع مفاتیح دوت كوم والحفاظ على العمليات، لذا فإننا نركز بشكل أقل على جمع التبرعات وأكثر على إحداث التأثير.
				</p>
				
				{/* <!-- PROGRESS --> */}
				<div className="progress-info d-flex justify-content-start align-items-end gap-2 px-2" dir="ltr">
					<span className="fs-3 fw-bolder">$43,489</span>
					<span className="pb-1 fs-6">/month raised from</span>
				</div>
				<div className="progress">
					<div className="progress-bar" role="progressbar" aria-valuenow="43489"
						 aria-valuemin="0" aria-valuemax="75000" style={{width: "58%"}}>
					</div>
				</div>
				{/* <!-- PROGRESS --> */}
			</div>
			
			{/* <!-- DONATE MODEL BOX --> */}
			<div className="choose-donate-model container rounded-4 bg-very-light-green py-3">
				<ul className="nav nav-pills d-flex justify-content-center align-items-center pb-3" id="buttons-tab" role="tablist">
					<li className="nav-item nav-item-choose-donate-model d-flex justify-content-center  p-2 pe-1 bg-light-green rounded-4 rounded-end-0" role="presentation">
						<button className="nav-link px-4 active" id="pills-monthly-donate-model-tab" data-bs-toggle="pill" data-bs-target="#pills-monthly-donate-model" type="button" role="tab" aria-controls="pills-monthly-donate-model" aria-selected="true">شهريا</button>
					</li>
					<li className="nav-item nav-item-choose-donate-model d-flex justify-content-center p-2 ps-1 bg-light-green rounded-4 rounded-start-0" role="presentation">
						<button className="nav-link px-4" id="pills-just-one-donate-model-tab" data-bs-toggle="pill" data-bs-target="#pills-just-one-donate-model" type="button" role="tab" aria-controls="pills-just-one-donate-model" aria-selected="false">مرة واحدة فقط</button>
					</li>
				</ul>
				<div className="tab-content	" id="buttons-tabContent">
					<div className="tab-pane fade show active" id="pills-monthly-donate-model" role="tabpanel" aria-labelledby="pills-monthly-donate-model-tab" tabIndex="0">
						<div className="box-price-btns d-flex justify-content-center align-items-center gap-1">
							<div className="d-flex flex-column gap-1">
								<div className="price-btn d-flex justify-content-center  p-2 bg-light-green rounded-3">
									<button type="button" className="btn px-4 active">$100</button>
								</div>
								<div className="price-btn d-flex justify-content-center p-2 bg-light-green rounded-3">
									<button type="button" className="btn px-4">$500</button>
								</div>
							</div>
							<div className="d-flex flex-column gap-1">
								<div className="price-btn d-flex justify-content-center p-2 bg-light-green rounded-3">
									<button type="button" className="btn px-4">$25</button>
								</div>
								<div className="price-btn d-flex justify-content-center p-2 bg-light-green rounded-3">
									<button type="button" className="btn px-4">$50</button>
								</div>
							</div>
						</div>
						<div className="types-of-money pt-3 d-flex justify-content-center align-items-center">
							<div className="choose-type-of-money position-relative">
								<form name="donate-submit" className="d-flex flex-column gap-2 align-items-center" action="" encType="multipart/form-data">
									<div className="d-flex align-items-center">
										<input type="text"
											   name="name"
											   className="input-type-of-money form-control border-0 bg-light-green p-3"
											   dir="ltr"
											   placeholder="other"/>
										<button type="button"
												className="button-choose-type-of-money btn d-flex justify-content-center align-items-center p-3 d-flex bg-white">
											<i className="fa fa-chevron-down opacity-50"></i>
										</button>
									</div>
									<div className="d-flex justify-content-center align-items-center gap-2" dir="ltr">
										<label htmlFor="accept-terms">رسوم معاملات البرسيم</label>
										<input type="checkbox" name="accept-terms" id="accept-terms" className="form-check m-0" required/>
									</div>
									<div className="submit-box">
										<button type="submit" name="submit-donate-box" className="btn btn-submit-donate">التالي</button>
									</div>
								</form>
								<div className="faq-box">
								
								</div>
								
								{/* <!-- CHOOSE TYPES OF MONEY BOX --> */}
								<div className="types-of-money-box bg-light-green p-2 rounded-1 mt-2 d-flex flex-column gap-2 d-none position-absolute">
									<div className="types-of-money-box-header d-flex justify-content-end">
										<button className="close-box-money btn btn-close px-2"></button>
									</div>
									<div className="content-of-types-of-money p-2 pt-0 d-flex flex-column gap-2" dir="ltr">
										<div className="type-of-money d-flex justify-content-between p-1">
											<div className="shortcut-money ps-3 pe-0">UGX</div>
											<div className="real-money">Ugandan shilling</div>
										</div>
										<div className="type-of-money d-flex justify-content-between p-1">
											<div className="shortcut-money ps-3 pe-0">UGX</div>
											<div className="real-money">Ugandan shilling</div>
										</div>
										<div className="type-of-money d-flex justify-content-between p-1">
											<div className="shortcut-money ps-3 pe-0">UGX</div>
											<div className="real-money">Ugandan shilling</div>
										</div>
										<div className="type-of-money d-flex justify-content-between p-1">
											<div className="shortcut-money ps-3 pe-0">UGX</div>
											<div className="real-money">Ugandan shilling</div>
										</div>
										<div className="type-of-money d-flex justify-content-between p-1">
											<div className="shortcut-money ps-3 pe-0">UGX</div>
											<div className="real-money">Ugandan shilling</div>
										</div>
										<div className="type-of-money d-flex justify-content-between p-1">
											<div className="shortcut-money ps-3 pe-0">UGX</div>
											<div className="real-money">Ugandan shilling</div>
										</div>
									</div>
								</div>
								{/* <!-- CHOOSE TYPES OF MONEY BOX --> */}
							</div>
						</div>
					</div>
					<div className="tab-pane fade" id="pills-just-one-donate-model" role="tabpanel" aria-labelledby="pills-just-one-donate-model-tab" tabIndex="0">
					
					</div>
				</div>
			</div>
			{/* <!-- DONATE MODEL BOX --> */}
		
		{/* <!-- DONATE SECTION --> */}
		
		{/* <!-- TERMS BOX --> */}
		<div className="terms bg-light-green pb-5">
			<div className="container-fluid">
				<h5 className="terms-heading text-center mb-3 pt-2">بدعمكم إن شاء الله ، سنركز على الأولويات التالية:</h5>
				<div className="terms-content container py-4 bg-very-light-green rounded-4">
					<h6 className="fw-bolder">🎯 بناء التكنولوجيا والمحتوى للتواصل مع القرآن</h6>
					<p className="px-1">
						- إثراء الآيات بمحتوى منظم تم التحقق منه
						يغطي الموضوعات الرئيسية.
						-  تجربة الارتباط التي تحسن الترابط على مستوى الآية.
						- الاستفادة من الذكاء الاصطناعي لمساعدة
						المستخدمين في العثور على إجابات لأسئلتهم
					</p>
					<h6 className="fw-bolder pt-3">🎯 استمر في تقديم تجربة عالمية المستوى</h6>
					<p className="px-1">
						- تنفيذ العديد من تحسينات التصميم وتجربة المستخدم
					   - توحيد تجارب المستخدم عبر موقع mafatih.com
					   الإلكتروني وتطبيقات الأجهزة المحمولة.
					</p>
					<h6 className="fw-bolder pt-3">🎯 تهدف للوصول إلى 10 ملايين مستخدم شهريًا</h6>
					<p className="px-1">
						- مزيد من التحسينات على تحسين محركات
						البحث وتصنيف الصفحة.
						- توسيع إمكانية الوصول إلى المزيد من
						المناطق واللغات.
						- تكامل المطور مع أفضل التطبيقات لتوسيع
						نطاق وصولنا.
					</p>
				</div>
			</div>
        </div>
    </main>
		{/* <!-- TERMS BOX --> */}
    <FooterC/>
    </>
  )
}
