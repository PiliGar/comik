import React, { useContext, useState } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";
import { useForm, FormContext } from "react-hook-form";
import { doLogin } from "../../../services/auth.api";
import { ChevronRight, ArrowRight } from "react-feather";
import { Button } from "../Button/index";
import { Link as Linkto } from "../Link/index";
import { StyledForm } from "./style";

export const LoginForm = withRouter(({ history, title, c2a }) => {
  const { user, setUser } = useContext(MainContext);
  const { register, handleSubmit, errors } = useForm();
  const methods = useForm({
    mode: "onBlur",
  });
  console.log("usuario actual", user);
  const onSubmit = async (data) => {
    console.log("--->>> data 🚀", data);
    const response = await doLogin(data);
    console.log("--->>> res 📦", response);
    if (response.status) {
      return history.push("/signup");
    }
    setUser(response);
    history.push("/profile");
  };

  return (
    <StyledForm>
      <h2>{title}</h2>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
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
          </div>
          <div className="form-group">
            <input
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
          </div>
          <Button variant="secondary">
            {c2a} <ArrowRight size="18" />
          </Button>
          <div className="change">
            <p>Are you new?</p>
            <Linkto to="/signup" variant="primary">
              Sign up here <ChevronRight color="#76B5D7" size="13" />
            </Linkto>
          </div>
        </form>
      </FormContext>
    </StyledForm>
  );
});
