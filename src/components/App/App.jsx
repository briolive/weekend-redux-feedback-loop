import { HashRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';
import StepOne from '../StepOne/StepOne.jsx';
import StepTwo from '../StepTwo/StepTwo.jsx';
import StepThree from '../StepThree/StepThree.jsx';
import StepFour from '../StepFour/StepFour.jsx';
import Review from '../Review/Review.jsx';
import Success from '../Success/Success.jsx';

function App() {

  return (
    <div className='App'>
      <Router>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Route exact path="/">
        <StepOne />
      </Route>
      <Route exact path="/steptwo">
        <StepTwo />
      </Route>
      <Route exact path="/stepthree">
        <StepThree />
      </Route>
      <Route exact path="/stepfour">
        <StepFour />
      </Route>
      <Route exact path="/review">
        <Review />
      </Route>
      <Route exact path="/success">
        <Success />
      </Route>
      </Router>
    </div>
  );
}

export default App;
