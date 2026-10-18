import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type SignupFormValues = {
  name: string;
  email: string;
  age: number;
};

export default function RHF() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>();

  const onSubmit: SubmitHandler<SignupFormValues> = (data) => {
    console.log(data.name, data.email, data.age);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <p>{errors.name.message}</p>}

      <input {...register("email", { required: "Email is required" })} />
      {errors.email && <p>{errors.email.message}</p>}

      <input
        type="number"
        {...register("age", { valueAsNumber: true, min: { value: 18, message: "Must be 18+" } })}
      />
      {errors.age && <p>{errors.age.message}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}