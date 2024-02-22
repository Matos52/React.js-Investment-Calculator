import logo from '../assets/Investment-calculator-logo.png'

export default function Header() {
    return(
        <header id="header">
            <img src={logo} alt="Investment calculator logo"></img>
            <h1>Investment Calculator</h1>
        </header>
    );
}