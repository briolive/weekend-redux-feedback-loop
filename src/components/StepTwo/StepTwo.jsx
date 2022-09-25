import React from 'react';
// Step 1: Imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to new page
import { useHistory } from 'react-router-dom';

const StepTwo = () => {
    const history = useHistory();
    // Step 2: useSelector & useDispatch
    // Getter
    const understanding = useSelector(store => store.understanding);
    const dispatch = useDispatch();

    // Step 4: Dispatch
    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_UNDERSTANDING', payload: event.target.value });
    }

    // Input validation & navigation
    const nextStep = () => {
        if (understanding > 0 && understanding <= 5) {
            history.push('/stepthree');
        } else {
            alert('A rating of 1-5 is required to continue.')
        };
    }


    return (
        <>
        <h1>How well are you understanding the content?</h1>
        <div>
            {/* Step 3: Getter & Setter */}
            <input value={understanding} onChange={handleChange} className="input" type="number" />
            <button onClick={nextStep} className="button">Next</button>
        </div>
        </>
    )
}


export default StepTwo;