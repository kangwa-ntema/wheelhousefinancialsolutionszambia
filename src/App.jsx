import "./App.css";

import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import OurServicesPage from "./pages/OurServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import WhLogo from "../src/assets/images/wheelhouse-logo-design/wheelhouse-logo-website.png";

/* ICONS */
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function App() {
  return (
    <div className="app">
      <header className="primaryHeader">
        <nav className="primaryNavigation">
          <div className="primaryNavLogo">
            <Link className="navLink" to="/">
              <img src={WhLogo} />
            </Link>
          </div>
          <ul className="navList" role="list">
            <li className="navItem">
              <Link className="navLink" to="/AboutUsPage">
                About
              </Link>
            </li>
            {/* <li className="navItem">
              <Link className="navLink" to="/">
                Home
              </Link>
            </li> */}
            {/*
            
             <li className="navItem">
              <Link className="navLink" to="/OurServicesPage">
                Services
              </Link>
            </li> 
            <li className="navItem">
              <Link className="navLink" to="/ContactUsPage">
                Contact
              </Link>
            </li>
              */}
          </ul>
        </nav>
      </header>
      <main className="mainSection">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutUsPage" element={<AboutUsPage />} />
          <Route path="/OurServicesPage" element={<OurServicesPage />} />
          <Route path="/ContactUsPage" element={<ContactUsPage />} />

          {/* <Route path="*" element={<NotFound/>} /> */}
        </Routes>
      </main>
      <footer className="footer">
        <nav className="footerNavigation">
          <ul role="list" className="footerSocialList">
            <div className="footerLogo"></div>
            <li className="footerSocialLink">
              <a href="https://www.facebook.com/wheelhousezm?mibextid=ZbWkwL">
                <FaFacebookSquare className="socialLinkIcon" />
              </a>
            </li>
          </ul>
          <div className="footerGetInTouchDetails">
            <div className="footerPhoneNumber">
              <a href="tel:+260771282955">
                <FaPhone className="footerPhoneIcon" />
                <span className="iconSeparator">|</span>
                +260 771 282 955
              </a>
            </div>
            <div className="footerEmail">
              <a href="mailto:enquiries.wheelhouse@gmail.com">
                <MdEmail className="footerEmailIcon" />
                <span className="iconSeparator">|</span>
                enquiries.wheelhouse
              </a>
            </div>
          </div>
          {/* <ul className="footerNavList" role="list">
            <li className="footerNavItem">
              <Link className="footerNavLink" to="/">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link className="footerNavLink" to="/AboutUsPage">
                About
              </Link>
            </li>
            <li className="navItem">
              <Link className="footerNavLink" to="/OurServicesPage">
                Services
              </Link>
            </li>
            <li className="navItem">
              <Link className="footerNavLink" to="/ContactUsPage">
                Contact
              </Link>
            </li>
          </ul> */}
        </nav>
      </footer>
    </div>
  );
}

export default App;
