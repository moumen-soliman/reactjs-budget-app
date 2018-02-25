import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { createStore } from 'redux';
import BudgetDashboardPage from '../components/BudgetDashboardPage';
import AddBudgetPage from '../components/AddBudgetPage';
import EditBudgetPage from '../components/EditBudgetPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = action.decrementBy === 'number' ? action.decrementBy : -1;
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return state;
  }
})

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 6
});

store.dispatch({
  type: 'DECREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementBy: -10
});

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={BudgetDashboardPage} exact={true} />
        <Route path="/create" component={AddBudgetPage} />
        <Route path="/edit" component={EditBudgetPage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;