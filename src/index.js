import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        // dispatch will have type of 'SET_FEELING'
        // and payload with the value to set
        return action.payload;
    } else 
    return state;
}

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        // dispatch will have type of 'SET_UNDERSTANDING'
        // and payload with the value to set
        return action.payload;
    } else
    return state;
}

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        // dispatch will have type of 'SET_SUPPORT'
        // and payload with the value to set
        return action.payload;
    } else
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        // dispatch will have type of 'SET_COMMENTS'
        // and payload with the value to set
        return action.payload;
    } else
    return state;
}

// Redux store! Keeps track of all reducers
const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feeling,
            understanding,
            support,
            comments,
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
