import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addBudget } from './actions/budgets';
import { setTextFilter } from './actions/filters';
import getVisibleBudgets from './selectors/budgets';
import './index.css';

const store = configureStore();

store.dispatch(addBudget({description: 'Water Bill'}));
store.dispatch(addBudget({description: 'Gas Bill'}));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleBudgets = getVisibleBudgets(state.budgets, state.filters);
console.log(visibleBudgets)

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));
