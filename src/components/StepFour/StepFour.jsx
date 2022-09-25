import React from 'react';
// Step 1: Imports
import { useSelector, useDispatch } from 'react-redux';

const StepFour = () => {
    // Step 2: useSelector & useDispatch
    // Getter
    const comments = useSelector(store => store.support);

    return (
        <>
        <h1>Are there any comments you would like to leave?</h1>
        <div>
            <input value={comments} className="input" type="text" />
            <button className="button">Next</button>
        </div>
        </>
    )
}

export default StepFour;