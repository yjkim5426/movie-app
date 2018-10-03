import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM render one component to 'document.getElementById('root'));'
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

// React is an library
// Use the ReactDom for a web: jsx --ReactDom--> html
// Use the ReactNative for a mobile app: jsx --ReactNative--> Mobile app?