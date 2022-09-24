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


    return (
        <>
        <h1>How well are you understanding the content?</h1>
        <div>
            {/* Step 3: Getter & Setter */}
            <input value={understanding} className="input" type="number" />
            <button className="button">Next</button>
        </div>
        </>
    )
}


export default StepTwo;