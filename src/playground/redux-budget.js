import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_budget
const addBudget = (
  {
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  
  } = {}) => ({
  type: 'ADD_BUDGET',
  budget: {
    id: uuid()
  }
})

// REMOVE_budget
const removeBudget = ({ id } = {}) => ({
  type: 'REMOVE_BUDGET',
  id
});

// EDIT_budget
const editBudget = (id, updates) => ({
  type: 'EDIT_BUDGET',
  id,
  updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// budgets Reducer

const budgetsReducerDefaultState = [];

const budgetsReducer = (state = budgetsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_BUDGET': 
      return [
        ...state,
        action.budget
      ];
    case 'REMOVE_BUDGET':
      return state.filter(({ id }) => id !== action.id);
    
    case 'EDIT_BUDGET':
      return state.map((budget) => {
        if (budget.id === action.id) {
          return {
            ...budget,
            ...action.updates
          };
        } else {
          return budget;
        };
      })
    default:
      return state;
  }
};

// Filters Reducer
// text => '', sortBy => 'date', startDate => undefined, endDate => undefined

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };

    default:
      return state;
  }
};

// Store creation

const store = createStore(
  combineReducers({
    budgets: budgetsReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
})

const budgetOne = store.dispatch(addBudget({ description: 'Phone', amount: 100 }));
const budgetTwo = store.dispatch(addBudget({ description: 'Anotherone', amount: 400 }));
 
store.dispatch(removeBudget({ id: budgetOne.budget.id }));
store.dispatch(editBudget(budgetTwo.budget.id, { amount: 500 }));
store.dispatch(setTextFilter('moumentext'));
store.dispatch(setTextFilter( )); //empty one

const demoState = {
  budgets: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};

