import React from "react";
import LoanCalculator from "../../Components/LoanCalculator/LoanCalculator";
import "./HomePage.css";

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
          <li className="keyword">Transparency</li>
          <li className="keyword">Customer Care</li>
          <li className="keyword">Fast Service</li>
        </ul>
      </div>
      {/* <LoanCalculator /> */}
      <div className="loanRequirementsInfo">
        <div className="loanRequirementsSubSection">
          <h3 className="loanRequirementsTitle">Acceptable Collateral</h3>
          <ul role="list" className="collateralRequirements">
            <li className="collateralRequirement">Laptops</li>
            <li className="collateralRequirement">Phones</li>
            <li className="collateralRequirement">Tablets</li>
            <li className="collateralRequirement">TVs</li>
            <li className="collateralRequirement">Video Games</li>
            <li className="collateralRequirement">Title Deeds</li>
            <li className="collateralRequirement">Vehicles</li>
          </ul>
        </div>
        <div className="loanRequirementsSubSection">
          <h3 className="loanRequirementsTitle">Requirements</h3>
          <ul role="list" className="docRequirements">
            <li className="docRequirement">Copy of NRC</li>
            <li className="docRequirement">Collateral</li>
          </ul>
        </div>
      </div>

      <div className="getInTouchContainer">
        <div className="getInTouchInfoContainer">
          <div className="getInTouchBG"></div>
          <div className="getInTouchInfo">
            <h1 className="getInTouchTitle">Get In Touch</h1>
            <a href="" tel="+260771282955" className="phoneNumber">
              +260 771 282 955
            </a>
            <a href="" mailto="enquiries.wheelhouse@gmail.com">

            <p>enquiries.wheelhouse@gmail.com</p>
            </a>
            <p>5 Saise Road Stand B2, Longacres, Lusaka Zambia </p>
            <p className="phoneNumber"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
