import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

// provide store to all the containers
import store from './app/store';
import {Provider} from "react-redux";


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

registerServiceWorker();
