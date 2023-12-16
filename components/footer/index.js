import Link from 'next/link'
import React from 'react'

export default function FooterC() {
  return (
    <>
    {/* <!--         footer section --> */}
		<footer className="footer bg-footer pt-4">
			<div className="container d-flex flex-column pt-2">
				
				{/* <!--rafed saghafiye --> */}
				<div className="rafed-saghafiye align-self-center">
					<Link href={"./"}>
						<img src="/images/footer-preyer.svg" alt="rafed saghafiye" width="100%"/>
					</Link>
				</div>
				{/* <!--rafed saghafiye --> */}
				
				{/* <!--socials --> */}
				<div className="social d-flex justify-content-between w-75 m-auto pt-4">
					<div className="skype">
						<Link href={"./"}>
							<img src="/images/skyp.svg" alt="skype loge"/>
						</Link>
					</div>
					<div className="twitter">
						<Link href={"./"}>
							<img src="/images/twitte.svg" alt="skype loge"/>
						</Link>
					</div>
					<div className="whatsapp">
						<Link href={"./"}>
							<img src="/images/whatsUp.svg" alt="skype loge"/>
						</Link>
					</div>
					<div className="facebook">
						<Link href={"./"}>
							<img src="/images/facebook.svg" alt="skype loge"/>
						</Link>
					</div>
					<div className="instagram">
						<Link href={"./"}>
							<img src="/images/instgram.svg" alt="skype loge"/>
						</Link>
					</div>
				</div>
				{/* <!--socials --> */}
				
				{/* <!--footer details--> */}
				<div className="details d-flex w-75 m-auto justify-content-between fs-6 py-4">
					<div className="concat">
						<span className="text-color-footer">ارتباط با ما</span>
					</div>
					<div className="about">
						<span className="text-color-footer">درباره ما</span>
					</div>
					<div className="language">
						<div className="dropup d-flex align-items-center">
							<div className="dropdown-toggle text-color-footer"
								 type="button"
								 data-bs-toggle="dropdown"
								 aria-expanded="false">
								فارسی
							</div>
							<ul className="dropdown-menu dropdown-menu-start">
								<li><Link className="dropdown-item" href={"./"}>Action</Link></li>
								<li><Link className="dropdown-item" href={"./"}>Another action</Link></li>
								<li><Link className="dropdown-item" href={"./"}>Something else here</Link></li>
							</ul>
						</div>
					</div>
				</div>
				{/* <!--footer details--> */}
			</div>
			{/* <!--footer copyright--> */}
			<div className="copyright bg-light-green py-2">
				<div className="container w-75 d-flex align-items-center justify-content-center text-center">
                    <span className="text-color-copyright">
                        شبکة رافد Copyright © 1998-2022 rafed.net للتنمیة الثقافیة
                    </span>
				</div>
			</div>
			{/* <!--footer copyright--> */}
		</footer>
		{/* <!--         footer section --> */}
    </>
  )
}
