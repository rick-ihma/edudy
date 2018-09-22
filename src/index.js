import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Company from './company';

ReactDOM.render( <Company/>, document.getElementById('root'));
registerServiceWorker();
