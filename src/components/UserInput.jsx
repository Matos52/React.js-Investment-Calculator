export default function UserInput() {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" required></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" required></input>
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" required></input>
        </p>
      </div>
    </section>
  );
}