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


    return (
        <>
        <h1>How are you feeling today?</h1>
        </>
    )
}

export default StepOne;