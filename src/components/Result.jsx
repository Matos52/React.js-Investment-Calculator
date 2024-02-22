export default function Result({initialInvestmentValue, annualInvestmentValue, expectedReturnValue, durationValue }) {
    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{durationValue}</td>
                    <td>{initialInvestmentValue}</td>
                    <td>1</td>
                    <td>{expectedReturnValue}</td>
                    <td>{annualInvestmentValue}</td>
                </tr>
            </tbody>
        </table>
    );
}