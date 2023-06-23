import React from "react";
export default function Footer() {
  return (
    <div className="container-fluid mt-5" id="common_bg">
      <div className="mt-5">
        <div className="row text-white p-5">
          <div className="col-sm-4 p-5">
            <a href="" className="text-white">
              LOGO
            </a>
            <p className="pt-5">
              At AssetToken our primary aim is to help land owners and property
              managers to connect to the right audience of investors while also
              allowing interested investors to share their purchasing power and
              invest in their so desired properties without the fear of being
              unable to afford this properties. Through the use of blockchain
              technology.
            </p>
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-2 p-5 pt-3 px-0">
            <h3>Features</h3>
            <a className="nav-link p-1" href="#">
              Services
            </a>
            <a className="nav-link p-1" href="#">
              Investment
            </a>
            <a className="nav-link p-1" href="#">
              Property
            </a>
            <a className="nav-link p-1" href="#">
              Resources
            </a>
          </div>
          <div className="col-sm-3 p-5 pt-3 px-0">
            <h3>More Information</h3>
            <a className="nav-link p-1" href="#">
              Contact us
            </a>
            <a className="nav-link p-1" href={`/PrivacyPolicy`}>
              Privacy Policy
            </a>
            <a className="nav-link p-1" href={`/Blog`}>
              FAQs
            </a>
            <a className="nav-link p-1" href={`/TermsOfUse`}>
              Terms of Use
            </a>
            <a className="nav-link p-1" href={`/PrivacyPolicy#Disclaimer`}>
              Disclaimer
            </a>
          </div>
          <div className="col-sm-2 p-5 pt-3 px-0">
            <h3>Contact Us</h3>
          </div>
          <div className="clearfix mb-5">
            <div className="ps-5 float-start">
              <a className="p-3 ps-0" href="">
                <img className="" width="40" src="/Images/Discord.png" />
              </a>
              <a className="p-3" href="">
                <img className="" width="40" src="/Images/IG.png" />
              </a>
              <a className="p-3" href="">
                <img className="" width="40" src="/Images/Linkedin.png" />
              </a>
            </div>
            <div className="float-end pe-5 bg-white rounded-3 mb-5">
              <button className="bg-transparent border-0">
                <input
                  type="text"
                  value="Hello How May I Help You Today"
                  className="border-0 py-5 ps-4 rounded-3"
                  id="bot"
                ></input>

                <img src="Images/send.png" width="60" className="pe-5" />
              </button>
            </div>
          </div>
          <p>
            <span className="glyphicon glyphicon-copyright-mark"></span> 2023{" "}
            <a href={`/`} className="text-white">
              AssetToken.com
            </a>
            . All Right Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
