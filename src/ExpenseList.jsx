import React from 'react';

const ExpenseList = ({ expenses, onEditExpense, onDeleteExpense }) => {
  return (
    <div>
      {expenses.map((expense, index) => (
        <div key={index}>
          <div>
            <strong>{expense.title}</strong> - ${expense.amount} on {expense.date} ({expense.category})
          </div>
          <button onClick={() => onEditExpense(index)}>Edit</button>
          <button onClick={() => onDeleteExpense(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ExpenseList;
