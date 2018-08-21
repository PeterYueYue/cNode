import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// 两种Route
import {HashRouter} from "react-router-dom";
// import {BrowserRouter} from "react-router-dom";


ReactDOM.render(

    <HashRouter>
        <App />
    </HashRouter>


    , document.getElementById('root'));
registerServiceWorker();
