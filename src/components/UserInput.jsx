export default function UserInput({
  onInitialInvestment,
  initialInvestmentValue,
  onAnnualInvestment,
  annualInvestmentValue,
  onExpectedReturn,
  expectedReturnValue,
  onDuration,
  durationValue,
}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={initialInvestmentValue}
            onChange={onInitialInvestment}
          ></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={annualInvestmentValue}
            onChange={onAnnualInvestment}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={expectedReturnValue}
            onChange={onExpectedReturn}
          ></input>
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={durationValue}
            onChange={onDuration}
          ></input>
        </p>
      </div>
    </section>
  );
}
