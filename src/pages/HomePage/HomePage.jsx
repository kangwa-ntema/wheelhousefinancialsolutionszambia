import "./HomePage.css";
import LoanRegistrationForm from "../../Components/LoanRegistrationForm/LoanRegistrationForm";
import React from "react";
import LoanCalculator from "../../Components/LoanCalculator/LoanCalculator";
import CollateralImg1 from "../../assets/images/collateral-imgs/car-collateral-img.png";
import CollateralImg2 from "../../assets/images/collateral-imgs/games-collateral-img.png";
import CollateralImg3 from "../../assets/images/collateral-imgs/laptops-collateral-img.png";
import CollateralImg4 from "../../assets/images/collateral-imgs/phone-collateral-img.png";
import CollateralImg5 from "../../assets/images/collateral-imgs/tablet-collateral-img.png";
import CollateralImg6 from "../../assets/images/collateral-imgs/tv-collateral-img.png";

/* ICONS */
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const HomePage = () => {
  return (
    <section className="homePageSection">
      <div className="pageHeadingContainer">
        <div className="pageHeadingInfo">
          <h1 className="pageHeadingTitle">
            Empower Your Financial Journey With{" "}
            <span>Wheelhouse Financial Solutions</span>
          </h1>
          <p className="pageHeadingSubTitle">
            Thinking of ways to finance your plans? Whether you are bridging the
            gap between incomes or pursuing your dreams our hassle free process
            and competitive rates make borrowing stress-free.
          </p>
        </div>
        <div className="loanInterestsInfo">
          <h1 className="loanInterestsTitle">
            Get a <span>Collateral Based Loan</span> with the best interests
            within the given periods
          </h1>
          <ul role="list" className="loanInterests">
            <li className="loanInterestDuration">1 Week - 7.5%</li>
            <li className="loanInterestDuration">2 Weeks - 15%</li>
            <li className="loanInterestDuration">1 Month - 25%</li>
          </ul>
        </div>
      </div>

      <div className="keyWordsContainer">
        <ul role="list" className="keyWordsList">
          <li className="keyword">Customer Oriented</li>
          <li className="keyword">Trustworthiness</li>
          <li className="keyword">Innovation</li>
        </ul>
      </div>
      {/* <LoanCalculator /> */}
      <div className="loanRequirementsInfo">
        <div className="loanRequirementsSubSection">
          <h3 className="loanRequirementsTitle">Acceptable Collateral</h3>
          <ul role="list" className="collateralRequirements">
            <li className="collateralRequirement">- Laptops</li>
            <li className="collateralRequirement">- Phones</li>
            <li className="collateralRequirement">- Tablets</li>
            <li className="collateralRequirement">- TVs</li>
            <li className="collateralRequirement">- Video Games</li>
            <li className="collateralRequirement">- Title Deeds</li>
            <li className="collateralRequirement">- Vehicles</li>
          </ul>
        </div>
        <div className="loanRequirementsSubSection">
          <h3 className="loanRequirementsTitle">Requirements</h3>
          <ul role="list" className="docRequirements">
            <li className="docRequirement">- Copy of NRC</li>
            <li className="docRequirement">- Collateral</li>
          </ul>
        </div>
        <div className="acceptableCollateralImages">
          <div className="acceptableCollateralImage one">
            <img src={CollateralImg1} alt="" />
          </div>
          <div className="acceptableCollateralImage two">
            <img src={CollateralImg2} alt="" />
          </div>
          <div className="acceptableCollateralImage three">
            <img src={CollateralImg3} alt="" />
          </div>
          <div className="acceptableCollateralImage four">
            <img src={CollateralImg4} alt="" />
          </div>
          <div className="acceptableCollateralImage five">
            <img src={CollateralImg5} alt="" />
          </div>
          <div className="acceptableCollateralImage six">
            <img src={CollateralImg6} alt="" />
          </div>
        </div>
      </div>
      <section className="loanFormSection">
        <LoanRegistrationForm />
      </section>

      <div className="getInTouchContainer">
        <div className="getInTouchInfoContainer">
          <div className="getInTouchBG"></div>
          <div className="getInTouchInfo">
            <div className="getInTouchInfoBG">
              <h1 className="getInTouchTitle">Get In Touch</h1>
              <div className="getInTouchDetails">
                <div className="phoneNumber">
                  <a href="tel:+260771282955">
                    <FaPhone className="phoneIcon" />
                    <span className="iconSeparator">|</span>
                    +260 771 282 955
                  </a>
                </div>
                <div className="email">
                  <a href="mailto:enquiries.wheelhouse@gmail.com">
                    <MdEmail className="emailIcon" />
                    <span className="iconSeparator">|</span>
                    enquiries.wheelhouse
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="map-location">
          <p className="officeGoogleLocation">
            5 Saise Road Stand B2, Longacres, Lusaka Zambia{" "}
          </p>

          <div className="officeGoogleMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d526.6537153401304!2d28.306214204038344!3d-15.410996188691472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408d006e28547b%3A0x19846cc84f5418a!2sKusafiri%20Travel%20and%20Tours!5e0!3m2!1sen!2szm!4v1720245803736!5m2!1sen!2szm"
              /* width="600"
                height="450" */
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
