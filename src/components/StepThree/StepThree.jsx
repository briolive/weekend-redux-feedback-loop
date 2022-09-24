import React from 'react';
// Step 1: Imports
import { useSelector, useDispatch } from 'react-redux';
// Allows us to navigate to new page
import { useHistory } from 'react-router-dom';

const StepThree = () => {
    const history = useHistory();
    // Step 2: useSelector & useDispatch
    // Getter
    const support = useSelector(store => store.support);
    const dispatch = useDispatch();

    // Step 4: Dispatch
    const handleChange = (event) => {
        // Pass the data to our reducer
        dispatch({ type: 'SET_SUPPORT', payload: event.target.value });
    }

    return (
        <>
        <h1>How well are you being supported?</h1>
        <div>
            {/* Step 3: Getter & Setter */}
            <input value={support} className="input" type="number" />
            <button className="button">Next</button>
        </div>
        </>
    )
}


export default StepThree;