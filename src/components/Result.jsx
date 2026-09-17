import { calculateInvestmentResults , formatter} from "../util/investment.js"



export default function Result({ investValue }) {
    const calculatedInvest = calculateInvestmentResults(investValue)
    const initialInvestment =
        calculatedInvest[0].valueEndOfYear -
        calculatedInvest[0].interest -
        calculatedInvest[0].annualInvestment;

    console.log(calculatedInvest);



    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

            <tbody>
                {calculatedInvest.map(yearData => {
                    const totalInterest =
                        yearData.valueEndOfYear -
                        yearData.annualInvestment * yearData.year -
                        initialInvestment;

                        const totalAmountInvested = yearData.valueEndOfYear-totalInterest

                    return <tr key={yearData.year}>
                        <td>{yearData.year}</td>
                        <td>{formatter.format(yearData.valueEndOfYear)}</td>
                        <td>{formatter.format(yearData.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountInvested)}</td>
                    </tr>
                })}
            </tbody>
        </table>
    )
}