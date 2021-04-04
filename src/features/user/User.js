import React, { useState } from "react";
import { ButtonGhost, ButtonPrimary } from "../../components/buttons";
import { InputGroup } from "../../components/input";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin, selectUserData, selectUserError } from "./userSlice";
import { ErrorMessage } from "../../components/errorMessage";
import { useHistory } from "react-router-dom";
import { Title } from "../../components/typography";

export function Login() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: null,
    password: null
  })
  const error = useSelector(selectUserError)
  const userData = useSelector(selectUserData)
  if (typeof (userData?.id) === "number") {
    history.push("/questionnaires")
  }

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
        <Title className="text-center mb-2">Login</Title>
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
        { error && <ErrorMessage className="mb-4">{ error }</ErrorMessage> }
        <div className="flex justify-between">
          <ButtonPrimary type="submit">Login</ButtonPrimary>
          <ButtonGhost>Sign Up</ButtonGhost>
        </div>
      </form>
    </section>
  );
}