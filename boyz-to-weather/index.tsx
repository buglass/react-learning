import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Input from './input';
import * as serviceWorker from './serviceWorker';
import { geoPropTypes } from "react-geolocated";

Input.propTypes = Object.assign({}, Input.propTypes, geoPropTypes);

ReactDOM.render(
  <React.StrictMode>
    <Input/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
