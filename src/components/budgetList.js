import React from 'react';
import { connect } from 'react-redux';
import BudgetListItem from './BudgetListItem';
import selectBudgets from '../selectors/budgets';

const BudgetList = (props) => (
    <div>
        <h1>Budget List</h1>
        {props.budgets.map((budget) => {
            return <BudgetListItem key={budget.id} {...budget} />;
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        budgets: selectBudgets(state.budgets, state.filters)
    };
};

export default connect(mapStateToProps)(BudgetList);