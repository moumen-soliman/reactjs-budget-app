import uuid from 'uuid';

// ADD_budget
export const addBudget = (
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
export const removeBudget = ({ id } = {}) => ({
    type: 'REMOVE_BUDGET',
    id
  });
  
  // EDIT_budget
export const editBudget = (id, updates) => ({
    type: 'EDIT_BUDGET',
    id,
    updates
  })