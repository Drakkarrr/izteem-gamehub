import { useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";

const Form = () => {
  const { register, handleSubmit } = useForm();
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
            {...register("name")}
            className="form-control"
            type="text"
            id="name"
          />
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
