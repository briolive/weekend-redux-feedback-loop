import React from 'react';
// Step 1: Imports
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Review = () => {
    const history = useHistory();
    // Step 2: useSelector & useDispatch
    // Getter
    const feeling = useSelector(store => store.feeling);
    const understanding = useSelector(store => store.understanding);
    const support = useSelector(store => store.support);
    const comments = useSelector(store => store.comments);
    const dispatch = useDispatch();

    // Pass the data to the server
    const handleSubmit = () => {
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: feeling,
                understanding: understanding,
                support: support,
                comments: comments,
            }
        }).then((response) => {
            // Navigate to Success page
            history.push('/success');
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong!');
        })
    };

    return (
        <>
        <h1>Review Your Feedback</h1>
        <div>
            <p>Feelings: {feeling}</p>
            <p>Understanding: {understanding}</p>
            <p>Support: {support}</p>
            <p>Comments: {comments}</p>
            <button onClick={handleSubmit} className="button">Submit</button>
        </div>
        </>
    )
}


export default Review;