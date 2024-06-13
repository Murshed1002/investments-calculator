import './App.css';
import Header from './components/Header.js';
import Results from './components/Resutls.js';
import UserInput from './components/UserInput.js';
import { useState } from 'react';
import {calculateInvestmentResults} from './util/investment.js'
function App() {

  const [userInput, setUserInput] = useState({
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
  });

const handleUserInput = (inputField, newValue)=>{
    setUserInput((prevUserInput) => {
        return {
            ...prevUserInput,
            [inputField] : newValue
        }
    });
}

const isValidInput = userInput.duration > 0 && userInput.annualInvestment > 0 && userInput.initialInvestment > 0;

const annualData = calculateInvestmentResults(userInput);
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange = {handleUserInput}/>
      {isValidInput ? <Results annualData={annualData} annualInvestment={userInput.annualInvestment} initialInvestment={userInput.initialInvestment}/> : <p className='center'>Please Enter duration , annualInvestment and initialInvestment of value greater than zero</p>}
    </>
  );
}

export default App;
