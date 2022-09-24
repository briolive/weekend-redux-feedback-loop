import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feeling = (state = 0, action) => {
    return state;
}

const understanding = (state = 0, action) => {
    return state;
}

const support = (state = 0, action) => {
    return state;
}

const comments = (state = '', action) => {
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
