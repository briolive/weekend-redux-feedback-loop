import React from 'react';
// Step 1: Imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to new page
import { useHistory } from 'react-router-dom';

const StepFour = () => {
    const history = useHistory();
    // Step 2: useSelector & useDispatch
    // Getter
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    // Step 4: Dispatch
    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_COMMENTS', payload: event.target.value });
    }

    // Navigation (input validation not required)
    const nextStep = () => {
        history.push('/review');
    }

    return (
        <>
        <h1>Are there any comments you would like to leave?</h1>
        <div>
            {/* Step 3: Getter & Setter */}
            <input value={comments} onChange={handleChange} className="input" type="text" />
            <button onClick={nextStep} className="button">Next</button>
        </div>
        </>
    )
}

export default StepFour;