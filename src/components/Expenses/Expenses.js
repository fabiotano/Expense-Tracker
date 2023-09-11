import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter.js";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  let filterInfoText = "2019, 2021 & 2022";

  if (filteredYear === "2019") {
    filterInfoText = "2020, 2021 & 2022";
  } else if (filteredYear === "2021") {
    filterInfoText = "2019, 2020 & 2022";
  } else if (filteredYear === "2022") {
    filterInfoText = "2019, 2020 & 2021";
  } // este codigo se repite cada vez que actualiza el selectedYear (Derived State)

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // console.log(filteredYear)

  // Filtra los elementos de props.items para obtener solo aquellos con el año igual a filteredYear
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  // console.log(filteredExpenses)

  let expenseContent = <p>No expenses found.</p>;

  if (filteredExpenses > 0) {
    expenseContent =
      filteredExpenses.length > 0 &&
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* <p>{filterInfoText}</p> */}

        {filteredExpenses.length === 0 && <p>No expenses found.</p>}
        {expenseContent}
      </Card>
    </div>
  );
};

export default Expenses;
