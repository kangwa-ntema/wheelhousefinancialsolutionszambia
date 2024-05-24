import React from 'react'
import "./LoanCalculator.css"

const LoanCalculator = () => {
    
  const formValidation = () => {

  }

let msg = "";

const getValue = (e) => {
  console.log(e.target.value)
}


const handleLoanCalculation = (e) => {
  e.preventDefault();
  const loanRequiredAmount = document.querySelector(".loanRequiredAmount").value;
  console.log(loanRequiredAmount)
  if(!loanRequiredAmount){
    msg = "Input field can not be empty"
  } else if(!loanRequiredAmount.match(/\+d/)){
    msg = "Enter numbers only"; 
  }else{
    getValue()
  }
  return;
}
  return (
    <section className="loanRequirementsAndInterestsSection" >
        <div className="loanRequirementsAndInterestsContainer">
        <div className="loanCalculator">
          <form action="">
            <div className="loanAmountRequest">
              <label htmlFor="">How much do you need? (ZMK)</label>
              <input className="loanRequiredAmount" type="number" />
              <div className="errorMsg">{msg}</div>
            </div>
            <div className="loanRequestDuration">
              <label htmlFor="">For how long</label>
              <div>
                <select className="loanRequiredDuration"  name="" id="">
                  <option className="loanRequiredDurationOption" onClick={getValue} value="">Select</option>
                  <option className="loanRequiredDurationOption" onClick={getValue} value="7">1 Week</option>
                  <option className="loanRequiredDurationOption" onClick={getValue} value="14">2 Weeks</option>
                  <option className="loanRequiredDurationOption" onClick={getValue} value="30">1 Month</option>
                </select>
              </div>
            </div>

            <button className="calculate" onClick={handleLoanCalculation}>Calculate</button>
          </form>
          <div className="loanRequestCalcResult">
            <p>Amount Requested: </p>
            <p>Interest Rate: </p>
            <p>Loan Duration: </p>
            <p>Amount Due: </p>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default LoanCalculator
