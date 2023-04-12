import React from "react";
import { categories } from "../../App";

interface ExpenseFilerProps {
  onFilter: (category: string) => void;
}

const ExpenseFilter: React.FC<ExpenseFilerProps> = ({ onFilter }) => {
  return (
    <>
      <select
        className="form-select"
        onChange={(e) => onFilter(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </>
  );
};

export default ExpenseFilter;
