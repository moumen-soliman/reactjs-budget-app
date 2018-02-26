import React from 'react';
import BudgetList from './budgetList';
import BudgetListFilters from './BudgetListFilters';

const BudgetDashboardPage = () => (
  <div>
    <BudgetListFilters />
    <BudgetList />
  </div>
);

export default BudgetDashboardPage;
