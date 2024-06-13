export default function UserInput({userInput, onChange}){
    
    return <section id="user-input">
    <div className="input-group">
    <p>
        <label>Initial Investment</label>
        <input value={userInput.initialInvestment} type="number" onChange={(event) => onChange('initialInvestment', event.target.value)}/>
    </p>
    <p>
        <label>Annual Investment</label>
        <input value={userInput.annualInvestment} type="number" onChange={(event) => onChange('annualInvestment', event.target.value)}/>
    </p>
    <p>
        <label>Expected Return</label>
        <input value={userInput.expectedReturn} type="number" onChange={(event) => onChange('expectedReturn', event.target.value)}/>
    </p>
    <p>
        <label>Duration</label>
        <input value={userInput.duration} type="number" onChange={(event) => onChange('duration', event.target.value)}/>
    </p>

    </div>
    </section>
}