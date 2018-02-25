import React from 'react';
import { connect } from 'react-redux';

const BudgetList = (props) => (
    <div>
        <h1>Budget List</h1>
        {props.filters.text}
        {props.budgets.length}
    </div>
);

const mapStateToProps = (state) => {
    return {
        budgets: state.budgets,
        filters: state.filters
    };
};

export default connect(mapStateToProps)(BudgetList);