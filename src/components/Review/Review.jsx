import React from 'react';
// Step 1: Imports
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Review = () => {
    const history = useHistory();
    // Step 2: useSelector & useDispatch
    // Getter
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);

    return (
        <>
        <h1>Review Your Feedback</h1>
        <div>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <button className="button">Submit</button>
        </div>
        </>
    )
}


export default Review;