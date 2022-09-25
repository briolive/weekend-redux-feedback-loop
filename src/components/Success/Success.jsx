import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Success = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const handleReset = () => {
        // Clear all reducers
        dispatch({ type: 'CLEAR_ALL' });
        history.push('/');
    }

    return (
        <>
        <h1>Thank you!</h1>
        <p>Your feedback has been submitted successfully.</p>
        <button onClick={handleReset} className="button">Leave New Feedback</button>
        </>
    )
}


export default Success;