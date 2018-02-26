import React from 'react';
import { connect } from 'react-redux';
import BudgetForm from './BudgetForm';
import { editBudget, removeBudget } from '../actions/budgets';

const EditBudgetPage = (props) => {
    return(
    <div> 
      <BudgetForm
        budget={props.budget}
        onSubmit={(budget) => {
          props.dispatch(editBudget(props.budget.id, budget));
          props.history.push('/');
        }}
      />

      <button onClick = {() => {
        props.dispatch(removeBudget({ id: props.budget.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    budget: state.budgets.find((budget) => budget.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditBudgetPage);
