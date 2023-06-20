import React from "react"
import { Link } from "react-router-dom"

export default function PrivacyPolicyContent() {
	function Disclaimer() {
		return (
			<>
				<div className="container text-center py-5" id="Disclaimer">
					<h1>Disclaimer!</h1>
				</div>

				<div className="row" id="common_txt">
					<div className="col-sm-2">
					</div>

					<div className="container-fluid pt-5 col-sm-10">
						<p>AssetToken provides this brand  ("Disclaimer") to clarify certain aspects of our tokenized real estate investment offering. By using our website, you acknowledge and agree to the following:</p>

						<div>
							<h3>01 Not an Offer of Securities</h3>
							<p className="container ps-5">The tokenized real estate investment offered by [Company Name] is not an offer or solicitation of securities or any form of financial instrument. The tokens issued by [Company Name] are not intended to represent equity, ownership, or debt in any traditional sense. They are solely intended to provide holders with certain rights and benefits as outlined in our offering documents.</p>
						</div>
						<div>
							<h3>02 Regulatory Considerations</h3>
							<p className="container ps-5">AssetToken operates within the legal and regulatory framework applicable to tokenized real estate investments. However, regulations and laws governing cryptocurrencies, blockchain technology, and real estate investments vary across jurisdictions. It is your responsibility to understand and comply with the relevant laws and regulations applicable in your jurisdiction before investing.</p>
						</div>
						<div>
							<h3>03 Information Accuracy</h3>
							<p className="container ps-5">While AssetToken strives to provide accurate and up-to-date information about our tokenized real estate investments, we cannot guarantee the accuracy, completeness, or reliability of any information provided. Investors are encouraged to conduct their own due diligence and consult with appropriate professionals before making investment decisions.</p>
						</div>
						<div>
							<h3>04 No Financial or Legal Advice</h3>
							<p className="container ps-5">The information provided by AssetToken is for informational purposes only and should not be construed as financial or legal advice. We do not provide personalized investment recommendations or legal counsel. You should consult with your own financial advisor, legal counsel, or tax professional to assess the suitability of our tokenized real estate investments based on your individual circumstances.</p>
						</div>
						<div>
							<h3>05 Market and Economic Factors</h3>
							<p className="container ps-5">The performance of tokenized real estate investments can be influenced by market conditions, economic factors, and other external forces beyond our control. Factors such as changes in real estate market values, interest rates, regulatory environment, and general economic conditions may affect the value of your investment.</p>
						</div>
						<div>
							<h3>06 Changes and Amendments</h3>
							<p className="container ps-5">AssetToken reserves the right to modify, amend, or terminate any aspect of its tokenized real estate investment program, including this Disclaimer, at any time without prior notice. Any changes will be communicated through appropriate channels, and it is your responsibility to stay informed about such updates.</p>
						</div>

						<p><b>By participating in our tokenized real estate investment program, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined in this Disclaimer.</b></p>
					</div>
				</div>

			</>
		)
	}
	return (
		<div>
			<h1 className="container-fluid pt-5 text-center" id="common_txt"><b>Privacy Policy</b></h1>
			<img className="img-fluid" src="/Images/PrivacyPolicyPage/Rectangle1555.png" />

			<div className="p-5 sticky-top float-start">
				<nav className="navbar bg-light sticky-top rounded">
					<div className="container-fluid">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link" id="common_txt" to={`/terms-of-use`}><b>Term of Use</b></Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" id="common_txt" to="#Disclaimer"><b>Disclaimer</b></Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" id="common_txt" to={`/blog`}><b>FAQs</b></Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link active" id="common_txt" to={`/privacy-policy`}><b>Privacy Policy</b></Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			<div className="row" id="common_txt">
				<div className="col-sm-5 bg-dark">
				</div>

				<div className="container-fluid pt-5 col-sm-100">
					<div>
						<div>
							<h1>Background</h1>
							<p>This Privacy Policy outlines how we, [ AssetToken], collect, use, disclose, and protect the personal information of users who participate in our tokenized real estate investment platform. We are committed to safeguarding your privacy and ensuring the security of your personal information. By using our platform, you consent to the practices described in this Privacy Policy.</p>
						</div>
						<div>
							<h1>Information we Collect</h1>
							<ul>
								<li>Personal Information
									<p>We may collect personal information such as your name, contact details, email address, residential address, government-issued identification, financial information, and other relevant information necessary for the tokenized real estate investment process.</p>
								</li>
								<li>Usage Information
									<p>We may collect information about your use of our platform, including log files, IP addresses, device information, and other similar data.</p>
								</li>
								<li>Cookies and Tracking Technologies
									<p>We may use cookies and other tracking technologies to collect information about your browsing activities on our platform. These technologies help us enhance your user experience and provide personalized services.</p>
								</li>
							</ul>
						</div>
						<div>
							<h1>How we Use Your Information</h1>
							<p>Link. We may use the collected personal information to:</p>
							<ul>
								<li>Process your investment transactions and manage your account</li>
								<li>Provide customer support and respond to your inquiries</li>
								<li>Send you important updates, notifications, and newsletters related to your investment</li>
								<li>Conduct market research and analysis to improve our platform and services.</li>
								<li>Comply with legal obligations and enforce our terms and conditions</li>
							</ul>
							<p>b. We may use usage information and cookies for analytics purposes, marketing, and improving our platform's functionality and security.</p>
						</div>
						<div>
							<h1>Sharing of Information</h1>
							<p>Link. We may share your personal information with:</p>
							<ul>
								<li>Third-party service providers who assist us in operating our platform and providing services to you</li>
								<li>Business partners, affiliates, or other third parties involved in the tokenized real estate investment process</li>
								<li>Regulatory authorities or law enforcement agencies to comply with legal obligations or protect our rights and interests</li>
							</ul>
							<p>b. We do not sell, rent, or trade your personal information to third parties for their marketing purposes without your explicit consent.</p>
						</div>
						<div>
							<h1>Data Security</h1>
							<p>Link. We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction.</p>
							<p>b. While we strive to safeguard your personal information, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security.</p>
						</div>
						<div>
							<h1>Your Choices</h1>
							<p>Link. You have the right to access, update, correct, or delete your personal information. You can exercise these rights by contacting us through the contact information provided below.</p>
							<p>b. You may choose to opt out of receiving marketing communications from us. However, you will still receive important transactional emails and notifications related to your investment.</p>
						</div>
						<div>
							<h1>Third-Party Links</h1>
							<p>Our platform may contain links to third-party websites or services. We are not responsible for the privacy practices or content of such third-party websites. We encourage you to review the privacy policies of those websites before providing any personal information.</p>
						</div>
						<div>
							<h1>Changes to This Privacy Policy</h1>
							<p>We reserve the right to update or modify this Privacy Policy at any time. The revised Privacy Policy will be effective from the date it is posted on our platform. We recommend reviewing this Privacy Policy periodically.</p>
						</div>
						<div>
							<h1>Contact Us</h1>
							<p>If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at Support@AssetToken.com</p>
							<p><b>By using our platform, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your personal information as described herein.</b></p>
						</div>
					</div>
				</div>
			</div>
			<Disclaimer />
		</div>


	)
}