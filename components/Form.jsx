import { useState } from "react";

function Form(props) {

    const [ name, setName ] = useState("");
    const [ major, setMajor ] = useState("");

    function handleName(e) {
       setName(e.target.value);
    }

    function handleCalculate() {
        // passes into props function; calculateScore
        props.handleCalculate(name, major);
    }

    return (
        <div>
            Name:
            <input type="text" value={name} onChange={handleName} />
            
            Major:
            <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />

            <button onClick={handleCalculate}>
                Calculate
            </button>
        </div>
    )
}

export default Form;