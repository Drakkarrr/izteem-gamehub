import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";
import React from "react";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be atleast 3 characters" })
    .max(50),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(0),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

interface ExpenseFormProps {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("description")}
            type="text"
            className="form-control"
            id="description"
          />
          {errors.description && (
            <div className="alert alert-danger">
              {errors.description.message}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("amount", { valueAsNumber: true })}
            type="number"
            className="form-control"
            id="amount"
          />
          {errors.amount && (
            <div className="alert alert-danger">{errors.amount.message}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            {...register("category")}
            className="form-select"
            id="category"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          {errors.category && (
            <div className="alert alert-danger">{errors.category.message}</div>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
};

export default ExpenseForm;
