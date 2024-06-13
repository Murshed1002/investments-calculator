import { formatter } from "../util/investment"
export default function Results({annualData, initialInvestment, annualInvestment}){
    return <table id = 'result'>
        <thead>
            <tr>
                <th>Year</th>
                <th>Annula Investment</th>
                <th>Value End Of Year</th>
                <th>Interest</th>
                <th>Total Earning</th>
            </tr>
        </thead>
        <tbody>
        {annualData.map(data => {
            return <tr key={data.year}>
                <td>{formatter.format(data.year)}</td>
                <td>{formatter.format(data.annualInvestment)}</td>
                <td>{formatter.format(data.valueEndOfYear)}</td>
                <td>{formatter.format(data.interest)}</td>
                <td>{formatter.format(data.valueEndOfYear - (initialInvestment + data.year*annualInvestment))}</td>
            </tr>
        })}
        </tbody>
    </table>
}