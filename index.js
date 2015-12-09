import React from 'react';
import ReactDOM from 'react-dom';
import ReactTapEventPlugin from 'react-tap-event-plugin';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router } from 'react-router'

import routes from './routes';
import './css/style.scss';

ReactTapEventPlugin();

window.React = React;

ReactDOM.render(

    <Router routes={ routes } history={ createBrowserHistory() } />,
    document.querySelector('#container')
);
