import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Car Insurance", amount: 100, category: "Car" },
    { id: 2, description: "Groceries", amount: 200, category: "Food" },
    { id: 3, description: "Rent", amount: 300, category: "Home" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="App">
      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
