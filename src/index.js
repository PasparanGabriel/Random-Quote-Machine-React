import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.css';
import Quote from './Quote';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Quote />, document.getElementById('app'));

serviceWorker.unregister();
