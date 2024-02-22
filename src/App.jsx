import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";

function App() {
  const [initialInvestment, setInitialInvestment] = useState("1");
  const [annualInvestment, setAnnualInvestment] = useState("1");
  const [expectedReturn, setExpectedReturn] = useState("1");
  const [duration, setDuration] = useState("1");

  function handleInitialInvestment(event) {
    setInitialInvestment(event.target.value);
  }

  function handleAnnualInvestment(event) {
    setAnnualInvestment(event.target.value);
  }

  function handleExpectedReturn(event) {
    setExpectedReturn(event.target.value);
  }

  function handleDuration(event) {
    setDuration(event.target.value);
  }

  return (
    <div>
      <Header />
      <UserInput
        onInitialInvestment={handleInitialInvestment}
        initialInvestmentValue={initialInvestment}
        onAnnualInvestment={handleAnnualInvestment}
        annualInvestmentValue={annualInvestment}
        onExpectedReturn={handleExpectedReturn}
        expectedReturnValue={expectedReturn}
        onDuration={handleDuration}
        durationValue={duration}
      />
      <Result
        initialInvestmentValue={initialInvestment}
        annualInvestmentValue={annualInvestment}
        expectedReturnValue={expectedReturn}
        durationValue={duration}
      />
    </div>
  );
}

export default App;
