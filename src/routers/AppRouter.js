import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import BudgetDashboardPage from '../components/BudgetDashboardPage';
import AddBudgetPage from '../components/AddBudgetPage';
import EditBudgetPage from '../components/EditBudgetPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

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