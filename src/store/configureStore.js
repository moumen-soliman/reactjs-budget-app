import { createStore, combineReducers } from 'redux';
import budgetsReducer from '../reducers/budgets';
import filtersReducer from '../reducers/filters';

export default () => {
    // Store creation
    const store = createStore(
        combineReducers({
        budgets: budgetsReducer,
        filters: filtersReducer
        })
    );

    return store;
}