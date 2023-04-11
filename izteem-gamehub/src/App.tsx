import { useState } from "react";
import "./App.css";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import ExpenseList from "./expense-tracker/components/ExpenseList";

export const categories: string[] = ["All", "Food", "Car", "Home"];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Car Insurance", amount: 100, category: "Car" },
    { id: 2, description: "Groceries", amount: 200, category: "Food" },
    { id: 3, description: "Rent", amount: 300, category: "Home" },
  ]);

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const visibleExpenses = selectedCategory
    ? expenses.filter((expense) => expense.category === selectedCategory)
    : expenses;

  return (
    <div className="App">
      <div className="mb-5">
        <h1>Expense Tracker</h1>
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter onFilter={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList expenses={visibleExpenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
