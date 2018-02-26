import React from 'react';
import { connect } from 'react-redux';
import { removeBudget } from '../actions/budgets';

const BudgetListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeBudget({ id }));
    }}>Remove</button>
  </div>
);

export default connect()(BudgetListItem);