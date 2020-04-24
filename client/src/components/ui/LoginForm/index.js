import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";

import { doLogin } from "../../../services/auth.api";

import { useForm, FormContext } from "react-hook-form";
import { Alert } from "react-bootstrap";
import { ChevronRight, ArrowRight } from "react-feather";
import { InputBox } from "../Input/index";
import { Button } from "../Button/index";
import { LinkTo } from "../Link/index";
import { StyledForm } from "./style";

export const LoginForm = withRouter(({ history, title, c2a }) => {
  const { user, setUser } = useContext(MainContext);
  const { error, setError } = useState();

  const methods = useForm({
    mode: "onBlur",
  });
  const { register, handleSubmit, errors } = methods;

  const onSubmit = async (data) => {
    const response = await doLogin(data);
    if (response.status !== 200) {
      return history.push("/login");
    }
    setUser(response.loggedUser);
    history.push("/profile");
  };

  return (
    <StyledForm>
      <h2>{title}</h2>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox
            type="email"
            placeholder="Email"
            name="username"
            ref={register({
              required: {
                value: true,
                message: "This field is required.",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "This field must be a valid email.",
              },
            })}
          />
          <InputBox
            type="password"
            placeholder="Password"
            name="password"
            ref={register({
              required: {
                value: true,
                message: "This field is required.",
              },
              pattern: {
                value: /^[a-zA-Z]\w{3,14}$/,
                message:
                  "This field must contain at least 1 capital letter and 1 number.",
              },
            })}
          />
          <Button variant="secondary">
            {c2a} <ArrowRight size="18" />
          </Button>
          <div className="change">
            <p>Are you new?</p>
            <LinkTo to="/auth/signup" variant="primary">
              Sign up here <ChevronRight color="#76B5D7" size="13" />
            </LinkTo>
          </div>
        </form>
      </FormContext>
    </StyledForm>
  );
});
