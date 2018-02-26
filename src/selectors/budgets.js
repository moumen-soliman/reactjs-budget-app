// Get visible Budgets
export default (budgets, {text, sortBy, startDate, endDate}) => {
  return budgets.filter((budget) => {
    const startDateMatch = typeof startDate !== 'number' || budget.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || budget.createdAt <= endDate;
    const textMatch = budget.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}