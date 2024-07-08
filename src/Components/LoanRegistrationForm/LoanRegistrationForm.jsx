import "./LoanRegistrationForm.css";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";

const LoanRegistrationForm = () => {
  const initialFormValues = {
    loanFormFirstName: "",
    loanFormLastName: "",
    loanFormNRC: "",
    loanFormEmail: "",
    loanFormPhoneNumber: "",
    loanFormAmount: "",
    loanFormCollateralDetails: "",
    /*     loanPeriod: "", */
    /*     collateralImg1: "",
    collateralImg2: "", */
  };
  const form = useRef()
  const [loanFormValues, setLoanFormValues] = useState(initialFormValues);
  const [loanFormErrors, setLoanFormErrors] = useState({});
  const [loanFormIsSubmit, setLoanFormIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoanFormValues({ ...loanFormValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoanFormErrors(validateLoanForm(loanFormValues));
    setLoanFormIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(loanFormErrors).length === 0 && loanFormIsSubmit) {
      emailjs
        .sendForm(
          "service_mbgtxrw",
          "template_5xdfuua",
          form.current,
          "wbtlQQHV0BKn0UhWI"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      alert("Form Submitted Successfully");
      setLoanFormValues(initialFormValues);
    }
  }, [loanFormErrors]);

  const validateLoanForm = (values) => {
    const errors = {};
    const nameRegex = /^[A-Za-z0-9]{1,20}$/;
    const emailRegex = /^[^s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const phoneNumberRegexZM = /^\+260(?:9[5-7]|\d{1})[7-9]\d{7}$/;
    const nrcRegex = /^\d{6}\/\d{2}\/\d$/;
    const numberRegex = /d+/;

    /* first name input validation */
    if (!values.loanFormFirstName.trim()) {
      errors.loanFormFirstName = "First name is required";
    } else if (!nameRegex.test(values.loanFormFirstName.trim())) {
      errors.loanFormFirstName =
        "First name must not be more than 20 characters long and can not contain special characters";
    }

    /* last name input validation */
    if (!values.loanFormLastName.trim()) {
      errors.loanFormLastName = "Last name is required";
    } else if (!nameRegex.test(values.loanFormLastName.trim())) {
      errors.loanFormLastName =
        "Last name must not be more than 20 characters long and can not contain special characters";
    }

    /* nrc input validation */
    if (!values.loanFormNRC.trim()) {
      errors.loanFormNRC = "NRC is required";
    } else if (!nrcRegex.test(values.loanFormNRC)) {
      errors.loanFormNRC = "NRC is not valid";
    }

    /* nrc input validation */
    if (!values.loanFormEmail.trim()) {
      errors.loanFormEmail = "Email is required";
    } else if (!emailRegex.test(values.loanFormEmail)) {
      errors.loanFormEmail = "This is not a valid email";
    }
    /* first name input validation */
    if (!values.loanFormPhoneNumber.trim()) {
      errors.loanFormPhoneNumber = "Phone number is required";
    } else if (!phoneNumberRegexZM.test(values.loanFormPhoneNumber)) {
      errors.loanFormPhoneNumber = "Phone number is not valid";
    }

    /* loan request amount input validation */
    if (!values.loanFormAmount.trim()) {
      errors.loanFormAmount = "loan amount is required";
    }

    /* Collateral details validation */
    if (!values.loanFormCollateralDetails.trim()) {
      errors.loanFormCollateralDetails = "collateral details are required";
    } else if (values.loanFormCollateralDetails.length > 1000) {
      errors.loanFormCollateralDetails = "Characters must not exceed 100";
    }

    return errors;
  };

  return (
    <>
      {/* {Object.keys(loanFormErrors).length === 0 && loanFormIsSubmit ? (
        <div className="ui message success">Submitted successfully</div>
      ) : (
        <pre>{JSON.stringify(loanFormValues, undefined, 2)}</pre>
      )} */}
      <form ref={form} onSubmit={handleSubmit} action="" className="loanForm">
        <p className="loanFormTitle">LOAN REQUEST FORM</p>
        <label htmlFor="loanFormFirstName">
          <input
            type="text"
            placeholder="First Name"
            name="loanFormFirstName"
            value={loanFormValues.loanFormFirstName}
            onChange={handleChange}
          />
          <p className="loanFormErrorMsg">{loanFormErrors.loanFormFirstName}</p>
        </label>
        <label htmlFor="loanFormLastName">
          <input
            type="text"
            placeholder="Last Name"
            name="loanFormLastName"
            value={loanFormValues.loanFormLastName}
            onChange={handleChange}
          />
          <p className="loanFormErrorMsg">{loanFormErrors.loanFormLastName}</p>
        </label>
        <label htmlFor="loanFormNRC">
          <input
            type="text"
            name="loanFormNRC"
            placeholder="NRC"
            className="loanFormNRC"
            value={loanFormValues.loanFormNRC}
            onChange={handleChange}
          />
          <p className="loanFormErrorMsg">{loanFormErrors.loanFormNRC}</p>
        </label>
        <label htmlFor="loanFormEmail">
          <input
            type="text"
            name="loanFormEmail"
            placeholder="Email"
            value={loanFormValues.loanFormEmail}
            onChange={handleChange}
          />
          <p className="loanFormErrorMsg">{loanFormErrors.loanFormEmail}</p>
        </label>
        <label htmlFor="loanFormPhoneNumber">
          <input
            type="text"
            name="loanFormPhoneNumber"
            placeholder="Phone Number"
            value={loanFormValues.loanFormPhoneNumber}
            onChange={handleChange}
          />
          <p className="loanFormErrorMsg">
            {loanFormErrors.loanFormPhoneNumber}
          </p>
        </label>
        <label htmlFor="loanFormAmount">
          <input
            type="text"
            name="loanFormAmount"
            placeholder="Amount"
            value={loanFormValues.loanFormAmount}
            onChange={handleChange}
          />
          <p className="loanFormErrorMsg">{loanFormErrors.loanFormAmount}</p>
        </label>
        <div className="loanFormCollateral">
          <p className="collateralDetailsInfo">
            Enter Collateral Details. Including Brand name, Model number, and
            the state of the item
          </p>

          <textarea
            name="loanFormCollateralDetails"
            id=""
            placeholder="E.g: Brand: Lenovo, Model: IdeaPad 3 10th Gen, Note: Barely used, minimal scratches, everything works fine, 3 hours battery life, all the ports work, no faults. "
            value={loanFormValues.loanFormCollateralDetails}
            onChange={handleChange}
          ></textarea>
          <p className="loanFormErrorMsg">
            {loanFormErrors.loanFormCollateralDetails}
          </p>
        </div>
        {/* <p className="loanPeriodParagraph">Select a loan period</p>
        <select name="loanPeriod" id="">
          <option value="">Loan Period</option>
          <option value="7">1 Week - 7.5%</option>
          <option value="14">2 Week - 15%</option>
          <option value="30">1 Month - 25%</option>
        </select> */}
        <div className="loanFormCollateral">
          {/* <div name="loanRequestCollateralList" id="">
              <div className="loanFormCollateralItem">
                <input type="checkbox" name="phoneCollateral" id="" />
                <label htmlFor="phoneCollateral">Phone</label>
              </div>
              <div className="loanFormCollateralItem">
                <input type="checkbox" name="laptopCollateral" id="" />
                <label htmlFor="laptopCollateral">Laptop</label>
              </div>
              <div className="loanFormCollateralItem">
                <input type="checkbox" name="tabletCollateral" id="" />
                <label htmlFor="tabletCollateral">Tablet</label>
              </div>
              <div className="loanFormCollateralItem">
                <input type="checkbox" name="TVCollateral" id="" />
                <label htmlFor="TVCollateral">TV</label>
              </div>
              <div className="loanFormCollateralItem">
                <input type="checkbox" name="videoGameCollateral" id="" />
                <label htmlFor="videoGameCollateral">Video Game</label>
              </div>
              <div className="loanFormCollateralItem">
                <input type="checkbox" name="titleDeedCollateral" id="" />
                <label htmlFor="titleDeedCollateral">Title Deed</label>
              </div>
              <div className="loanFormCollateralItem">
                <input type="checkbox" name="VehicleCollateral" id="" />
                <label htmlFor="VehicleCollateral">Vehicle</label>
              </div>
            </div> */}

          {/* <label htmlFor="loanFormCollateralImg">
            <input
              type="file"
              name="loanFormCollateralImg"
              className="loanFormCollateralImg"
            />
          </label>
          <label htmlFor="loanFormCollateralImg">
            <input
              type="file"
              name="loanFormCollateralImg"
              className="loanFormCollateralImg"
            />
          </label> */}
        </div>
        {/* 
          <label htmlFor="loanFormAmount">
            <input type="number" name="loanFormAmount" placeholder="Amount" />
          </label>
          <label htmlFor="loanFormPeriod">
            <input
              type="number"
              name="loanFormPhoneNumber"
              placeholder="Period"
            />
          </label>
          <button>Calculate</button>
          <p className="loanAmountDue">Amount Due : </p>
          <p className="loanAmountDue">Date Due : </p>
 */}
        <button className="submitLoanBtn">Submit Loan Request</button>
      </form>
    </>
  );
};

export default LoanRegistrationForm;
