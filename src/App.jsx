import Header from "./components/Header.jsx"
import InputUser from "./components/InputUser.jsx"
import { useState } from "react"
import Result from "./components/Result.jsx";

function App() {
      const [userInput , setUserInput] = useState({
        initialInvestment: 10000 ,
        annualInvestment: 1200 ,
        expectedReturn: 6 ,
        duration: 10
    });

    function handleChange( inputIdentifier , newvalue ){
        setUserInput(prevUserInput => {
            return{
                ...prevUserInput,
            [inputIdentifier] : +newvalue
            }
        })
    }
  return (
    <>
    <Header/>
    <InputUser onChange={handleChange} investValue={userInput}/>
    <Result investValue={userInput}/>
    </>
  )
}

export default App
