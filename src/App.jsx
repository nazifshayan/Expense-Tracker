import React, { useState, useEffect } from 'react';
import AddExpenseForm from './AddExpenseForm';
import ExpenseList from './ExpenseList';
import ExpenseSummary from './ExpenseSummary';

const App = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const editExpense = (index, updatedExpense) => {
    const updatedExpenses = expenses.map((expense, i) => (i === index ? updatedExpense : expense));
    setExpenses(updatedExpenses);
    setEditingIndex(null);
  };

  const deleteExpense = (index) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <AddExpenseForm onAddExpense={addExpense} />
      <ExpenseList expenses={expenses} onEditExpense={setEditingIndex} onDeleteExpense={deleteExpense} />
      <ExpenseSummary expenses={expenses} />
      {editingIndex !== null && (
        <AddExpenseForm
          onAddExpense={(updatedExpense) => editExpense(editingIndex, updatedExpense)}
          initialData={expenses[editingIndex]}
        />
      )}
    </div>
  );
};

export default App;
