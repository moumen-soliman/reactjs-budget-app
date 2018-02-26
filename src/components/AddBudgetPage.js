import React from 'react';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import { addBudget } from '../actions/budgets';

const AddBudgetPage = (props) => (
  <div>
    <h1>Add Budget</h1>
    <BudgetForm 
      onSubmit={(budget) => {
        props.dispatch(addBudget(budget));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddBudgetPage);
