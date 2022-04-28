import React from "react";
import { useForm } from "react-hook-form";

const AddServices = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://obscure-fjord-94626.herokuapp.com/service`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("success:", result);
      });
  };
  return (
    <div className="container w-50 mx-auto">
      <h2>Please add a service !!!</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="mb-2"
          placeholder="Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <br />
        <textarea
          className="mb-2"
          placeholder="Description"
          {...register("description")}
        />
        <br />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register("price")}
        />
        <br />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register("img")}
        />
        <br />
        <input className="btn text-white" type="submit" value="Add Services" />
      </form>
    </div>
  );
};

export default AddServices;
