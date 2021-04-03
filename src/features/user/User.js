import React, { useState } from "react";
import { ButtonGhost, ButtonPrimary } from "../../components/buttons";
import { InputGroup } from "../../components/input";
import { useDispatch } from "react-redux";
import { fetchLogin } from "./userSlice";

export function Login() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: null,
    password: null
  })

  const submitForm = event => {
    event.preventDefault()
    dispatch(fetchLogin(formData))
  }
  return (
    <section className="flex justify-center items-start h-full bg-cover bg-login-background">
      <form
        className="w-3/12 my-auto bg-black-background p-8 rounded border-4 border-indigo-500"
        onSubmit={ submitForm }
      >
        <h1 className="text-indigo-500 text-5xl text-center mb-2 w-full">Login</h1>
        <InputGroup
          label="Email"
          name="email"
          type="email"
          value={ formData }
          onChange={ setFormData }
          placeholder="your-email@gmail.com"
          className="mb-2"
        />
        <InputGroup
          label="Password"
          name="password"
          type="password"
          value={ formData }
          onChange={ setFormData }
          placeholder="******************"
          className="mb-4"
        />
        <div className="flex justify-between">
          <ButtonPrimary type="submit">Login</ButtonPrimary>
          <ButtonGhost>Sign Up</ButtonGhost>
        </div>
      </form>
    </section>
  );
}