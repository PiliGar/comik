import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";

import { createPublisher } from "../../../services/publisher.api";

import { useForm, FormContext } from "react-hook-form";
import { ArrowRight } from "react-feather";
import { InputBox } from "../Input/index";
import { InputUpload } from "../InputUpload/index";
import { TextAreaBox } from "../TextArea/index";
import { Button } from "../Button/index";
import { StyledForm } from "./style";

export const AddPublisherForm = withRouter(({ history, title, c2a }) => {
  const { publishers, setPublisers } = useContext(MainContext);
  const { loading, setLoading } = useContext(MainContext);

  const methods = useForm();
  const { register, handleSubmit, errors } = methods;

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    const imageFile = data.picture[0];
    data.picture = imageFile;
    const response = await createPublisher(data);
    if (response.status === "200") {
      setPublisers([...publishers, response.obj]);
      setLoading(false);
      history.push("/gallery/publishers");
    }
  };

  return (
    <StyledForm>
      <h2>{title}</h2>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox
            type="text"
            placeholder="Name"
            name="name"
            ref={register({
              required: {
                value: true,
                message: "This field is required.",
              },
            })}
          />
          <InputBox
            type="text"
            placeholder="Location address"
            name="locationAddress"
            ref={register()}
          />
          <InputBox
            type="text"
            placeholder="Location City"
            name="locationCity"
            ref={register()}
          />
          <TextAreaBox
            name="excerpt"
            placeholder="Excerpt"
            rowsNumber="1"
            ref={register({
              maxLength: 200,
              message: "Max length 200 characters.",
            })}
          />
          <TextAreaBox
            name="description"
            placeholder="Description"
            rowsNumber="3"
            ref={register({
              maxLength: 3000,
              message: "Max length 3000 characters.",
            })}
          />
          <InputUpload
            type="file"
            c2a="Upload a picture"
            name="picture"
            ref={register()}
          />

          <Button to="/" variant="secondary">
            {c2a} <ArrowRight size="18" />
          </Button>
        </form>
      </FormContext>
    </StyledForm>
  );
});
