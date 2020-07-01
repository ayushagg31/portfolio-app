import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-171423142-1');

ReactDOM.render(<App />, document.getElementById('root'));