import React from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="container text-center">
      <h2>Please add a service !!!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName", { required: true, maxLength: 20 })} placeholder="Service Title"/>
        <br />
        <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
        <br />
        <input type="number" {...register("age", { min: 18, max: 99 })} />
        <br/>
        <input className='btn' type="submit" value="Add Services" />
      </form>
    </div>
  );
};

export default AddServices;
