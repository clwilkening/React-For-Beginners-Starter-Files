import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './componenets/App'
import StorePicker from './components/StorePicker'

render(<StorePicker />, document.querySelector('#main'));
