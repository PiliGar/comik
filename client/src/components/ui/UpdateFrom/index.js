import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";

import { doUpdate } from "../../../services/auth.api";

import { useForm, FormContext } from "react-hook-form";

import { ChevronRight, ArrowRight } from "react-feather";
import { InputBox } from "../Input/index";
import { Button } from "../Button/index";
import { LinkTo } from "../Link/index";
import { StyledForm } from "./style";

export const UpdateForm = withRouter(({ history, title, c2a }) => {
  const { user, setUser } = useContext(MainContext);

  const methods = useForm({
    mode: "onBlur",
    defaultValues: {
      name: user?.name,
      alias: user?.alias,
      username: user?.username,
    },
  });

  useEffect(() => {
    methods.reset({
      name: user?.name,
      alias: user?.alias,
      username: user?.username,
    });
  }, [user]);

  const { register, handleSubmit, errors } = methods;

  const onSubmit = async (data) => {
    const response = await doUpdate(data);
    if (response.status === 200) {
      setUser(data);
    }
  };

  return (
    <StyledForm>
      <h2>
        {title} {user?.alias}...
      </h2>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox
            label="Name:"
            type="text"
            placeholder="Name"
            name="name"
            ref={register({
              required: {
                value: false,
                message: "This field is required.",
              },
            })}
          />
          <InputBox
            label="Alias:"
            type="text"
            placeholder="Alias"
            name="alias"
            ref={register({
              required: {
                value: false,
                message: "This field is required.",
              },
            })}
          />
          <InputBox
            label="Email:"
            type="email"
            placeholder="Email"
            name="username"
            ref={register({
              required: {
                value: false,
                message: "This field is required.",
              },
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "This field must be a valid email.",
              },
            })}
          />
          <InputBox
            label="Password:"
            type="password"
            name="password"
            ref={register({
              required: {
                value: false,
                message: "This field is required.",
              },
              pattern: {
                value: /^[a-zA-Z]\w{3,14}$/,
                message:
                  "This field must contain at least 1 capital letter and 1 number.",
              },
            })}
          />
          <Button to="/" variant="secondary">
            {c2a} <ArrowRight size="18" />
          </Button>
        </form>
      </FormContext>
    </StyledForm>
  );
});
