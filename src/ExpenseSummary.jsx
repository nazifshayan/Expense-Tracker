import React from 'react';

const ExpenseSummary = ({ expenses }) => {
  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const categoryAmounts = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div>
      <h2>Total Amount Spent: ${totalAmount.toFixed(2)}</h2>
      <h3>Amount Spent by Category:</h3>
      <ul>
        {Object.keys(categoryAmounts).map((category) => (
          <li key={category}>{category}: ${categoryAmounts[category].toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
