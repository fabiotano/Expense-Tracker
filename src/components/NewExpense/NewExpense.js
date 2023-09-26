import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    // console.log(expenseData);
    props.onAddExpenseData(expenseData);
    setIsEditing(false)
  };

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = (event) => {
    event.preventDefault();
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  }

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="submit" onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler} 
      onCancel={stopEditingHandler} />}
    </div>
  );
};

export default NewExpense;
