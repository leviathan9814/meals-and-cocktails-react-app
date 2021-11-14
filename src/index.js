import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/app';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import ScrollToTop from "./scroll-to-top";

ReactDOM.render(
 <Provider store={store}>
    <Router>
      <ScrollToTop/>
      <App />
    </Router>
 </Provider>, document.getElementById('root')
);
