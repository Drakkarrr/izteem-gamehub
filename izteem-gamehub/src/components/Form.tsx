import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <h1>FORM</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            {...register("name", { required: true, minLength: 3 })}
            className="form-control"
            type="text"
            id="name"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">The name field is required!</p>
          )}
          {errors.name?.type === "minLength" && (
            <p className="text-danger">The name must be atleast 3 characters</p>
          )}
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="age">
            Age
          </label>
          <input
            {...register("age")}
            className="form-control"
            type="number"
            id="age"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
