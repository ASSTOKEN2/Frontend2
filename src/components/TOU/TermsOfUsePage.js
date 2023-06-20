import React from "react"
export default function TermsOfUse() {
	return (
		<div>

			{/*Background Logo*/}
			<div className="d-flex justify-content-center">
				<img className="position-absolute top-100" width="250" src="Images/TermsOfUsePage/bg_logo.png" />
			</div>

			{/*Heading*/}
			<div className="p-5" id="info">
				<h1 className="container-fluid text-center pt-5 pb-5" id="info">Terms of Use</h1>
			</div>


			<div className="container-fluid p-5">
				<div className="container p-5 pt-0">
					<h4 className="text-center">Welcome to AssetToken tokenized real estate investment Website. Before proceeding, please read and understand the following terms of use ("Terms") carefully. By accessing or using this platform, you agree to be bound by these Terms. If you do not agree with any of these Terms, you may not use the platform.</h4>


					<div className="container-fluid">
						{/*Column 1*/}
						<div className="col-sm-6">
							<div>
								<h2>Platform Description </h2>
								<p>Our platform enables users to participate in tokenized real estate investments by acquiring tokens representing ownership or economic interest in specific real estate properties.</p>
							</div>
							<div>
								<h2>Tokenized Real Estate Investments</h2>
								<p>The tokens represent ownership or economic interest in real estate properties. The specific terms and conditions of each investment opportunity will be provided separately and should be reviewed carefully before making any investment decisions.</p>
							</div>
							<div>
								<h2>Investment Risks</h2>
								<p>Investing in real estate, including tokenized real estate investments, involves risks. The value of your investment may fluctuate, and there is no guarantee of profits or returns. You should carefully consider your risk tolerance and investment objectives before participating in any tokenized real estate investment.</p>
							</div>
							<div>
								<h2>Token Ownership and Transfer</h2>
								<p>The tokens you acquire through the website represent ownership or economic interest in specific real estate properties. The transfer of tokens may be subject to restrictions, including lock-up periods or other regulatory requirements. You should carefully review the terms and conditions of each investment opportunity for details on token ownership and transfer restrictions.</p>
							</div>
							<div>
								<h2>Intellectual Property</h2>
								<p>The website and its content, including but not limited to text, graphics, logos, and software, are protected by intellectual property laws. You may not reproduce, modify, distribute, or use any content from the platform without our prior written consent.</p>
							</div>
						</div>
						{/*column 2*/}
						<div className="col-sm-6">
							<div>
								<h2>Eligibility</h2>
								<p>To use the website, you must be at least 18 years old and have the legal capacity to enter into a binding agreement. By using the website, you represent and warrant that you meet these eligibility requirements.</p>
							</div>
							<div>
								<h2>Regulatory Compliance</h2>
								<p>Our website operates in compliance with applicable laws and regulations. However, it is your responsibility to ensure that your use of the website and participation in any investment opportunity comply with the laws and regulations of your jurisdiction. We may require certain documentation or information to verify your eligibility and compliance with regulatory requirements.</p>
							</div>
							<div>
								<h2>Investment Decisions</h2>
								<p>You are solely responsible for making your own investment decisions. We do not provide financial, investment, or legal advice. You should consult with your own advisors and conduct independent due diligence before making any investment decisions.</p>
							</div>
							<div>
								<h2>Privacy and Security</h2>
								<p>We are committed to protecting your privacy and the security of your personal information. Our privacy policy outlines how we collect, use, and protect your data. By using the platform, you consent to the collection and use of your information as described in our privacy policy.</p>
							</div>
							<div>
								<h2>Modifications</h2>
								<p>We reserve the right to modify or update these Terms at any time without prior notice. Any changes will be effective immediately upon posting on the website. It is your responsibility to review these Terms periodically for any updates.</p>
							</div>
						</div>
					</div>

					<p className="text-center">By participating in our tokenized real estate investment program, you acknowledge that you have read, understood, and agreed to the terms and conditions outlined in this Disclaimer.</p>

				</div>
			</div>


		</div>
	)
}