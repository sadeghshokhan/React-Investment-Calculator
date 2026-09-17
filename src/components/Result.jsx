import { calculateInvestmentResults } from "../util/investment.js"


export default function Result({investValue}){
    const calculatedInvest = calculateInvestmentResults(investValue)

    console.log(calculatedInvest);
    


    return(
    <div>
        
    </div>
    )
}