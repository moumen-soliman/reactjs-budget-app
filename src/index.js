import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import NavLink from 'react-router-dom/NavLink';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
