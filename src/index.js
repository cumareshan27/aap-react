import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./App";
import {createStore} from 'redux';
import loggerReducer from './reducers/logger';
import { Provider } from 'react-redux';

const store = createStore(loggerReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));
