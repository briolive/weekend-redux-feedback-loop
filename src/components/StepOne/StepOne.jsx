import React from 'react';
// Step 1: Imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to new page
import { useHistory } from 'react-router-dom';

const StepOne = () => {
    const history = useHistory();
    // Step 2: useSelector & useDispatch
    // Getter
    const feeling = useSelector(store => store.feeling);
    const dispatch = useDispatch();

    // Step 4: Dispatch
    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_FEELING', payload: event.target.value });
    }

    // Input validation
    const nextStep = () => {
        if (feeling > 1 && feeling <= 5) {
            history.push('/steptwo');
        } else {
            alert('Rating is required to continue.')
        }};


    return (
        <>
        <h1>How are you feeling today?</h1>
        <div>
            {/* Step 3: Getter & Setter */}
            <input value={feeling} onChange={handleChange} className="input" type="number" />
            <button onClick={nextStep} className="button">Next</button>
        </div>
        </>
    )
}

export default StepOne;