import pic from "../assets/investment-calculator-logo.png"

export default function Header(){
    return (
        <div id="header">
            <h1>React Investment Calculator</h1>
            <img src={pic} alt="" />
        </div>
    )
}