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
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})

// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
})

// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
})

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
    case 'SORT_BY_AMOUNT': 
      return {
        ...state,
        sortBy: 'amount'
      };
    case 'SORT_BY_DATE': 
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SET_START_DATE': 
      return {
        ...state,
        startDate: action.startDate
      };
    case 'SET_END_DATE': 
      return {
        ...state,
        endDate: action.endDate
      };
    default:
      return state;
  }
};

// Get visible Budgets
const getVisibleBudgets = (budgets, {text, sortBy, startDate, endDate}) => {
  return budgets.filter((budget) => {
    const startDateMatch = typeof startDate !== 'number' || budget.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || budget.createdAt <= endDate;
    const textMatch = budget.description.toLowerCase().includes(text.toLowerCase());

    return StartDateMatch && endDateMatch && textMatch;
  })
}

// Store creation

const store = createStore(
  combineReducers({
    budgets: budgetsReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleBudgets = getVisibleBudgets(state.budgets, state.filters);
  console.log(visibleBudgets)
})

const budgetOne = store.dispatch(addBudget({ description: 'Phone', amount: 100 }));
const budgetTwo = store.dispatch(addBudget({ description: 'Anotherone', amount: 400 }));
 
store.dispatch(removeBudget({ id: budgetOne.budget.id }));
store.dispatch(editBudget(budgetTwo.budget.id, { amount: 500 }));

store.dispatch(setTextFilter('hone'));
store.dispatch(setTextFilter( )); //empty one

store.dispatch(sortByAmount());
store.dispatch(sortByDate());

store.dispatch(setStartDate(2000));
store.dispatch(setStartDate());
store.dispatch(setEndDate(1250));

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

