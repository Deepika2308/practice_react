
import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export function App(){

  const createAccount = () => {
    fetch(`http://localhost:8010/accounts/createAccount/savings`,{
      method:"post",
      body:JSON.stringify({
        name:"Gamma Three"
      }),
      headers:{"content-type":"application/json"},
    })
    .then((res) => res.json())
    .then((data) => console.log(`create new account data is ${JSON.stringify(data)}`));
  }

  const deposit =() => {
    fetch(`http://localhost:8010/accounts/update/deposit/${1}`,{
      method:"put",
      body:JSON.stringify({
        amount:3000
      }),
      headers:{"content-type":"application/json"},
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  const withdraw =() => {
    fetch(`http://localhost:8010/accounts/update/withdraw/${1}`,{
      method:"put",
      body:JSON.stringify({
        amount:3000
      }),
      headers:{"content-type":"application/json"},
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  const applyLoan =() =>{
    fetch(`http://localhost:8010/accounts/loan/applyLoan/${1}`,{
      method:"put",
      body:JSON.stringify({
        loanAmount:1000000,
        monthly_income:100000,
        monthly_expense:50000,
        tenure_months:36
      }),
      headers:{"content-type":"application/json"},
    })
    .then((res) => res.json())
    .then((data) => console.log(data))
  }

  const getChecking =() => {
    fetch(`http://localhost:8010/accounts/getCheckingAccounts`)
    .then((res) => res.json())
    .then((data) => console.log(data));
  }

   const getSaving =() => {
    fetch(`http://localhost:8010/accounts/getSavingAccounts`)
    .then((res) => res.json())
    .then((data) => console.log(data));
  }
 
  const getLoanRejectedAccounts =() =>{
    fetch(`http://localhost:8010/accounts/getLoanRejectedAccounts`)
    .then((res) => res.json())
    .then((data) => console.log(data));
  }

  return(
    <>
    <button type="button" onClick={() => createAccount()}>createNewAccount</button>
    <button type="button" onClick={() => deposit()}>Deposit</button>
    <button type="button" onClick={() => withdraw()}>Withdraw</button>
    <button type="button" onClick={() => applyLoan()}>Apply Loan</button>
    <button type="button" onClick={() => getChecking()}>Get Checking Account Count</button>
    <button type="button" onClick={() => getSaving()}>Get Checking Account Count</button>
    <button type="button" onClick={() => getLoanRejectedAccounts()}>Loan Rejected Accounts</button>
    </>
  )
}

