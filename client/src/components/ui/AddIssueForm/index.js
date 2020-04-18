import React, { useContext } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";

//import { createProfessional } from "../../../services/professional.api";

import { useForm, FormContext } from "react-hook-form";
import { ArrowRight } from "react-feather";
import { InputBox } from "../Input/index";
import { InputUpload } from "../InputUpload/index";
import { TextAreaBox } from "../TextArea/index";
import { Button } from "../Button/index";
import { StyledForm } from "./style";

export const AddIssueForm = withRouter(({ history, title, c2a }) => {
  const { user, setUser } = useContext(MainContext);

  const methods = useForm({
    defaultValues: {
      issueNumber: 1,
      coverDate: "1985-11-23",
    },
  });
  const { register, handleSubmit, errors } = methods;

  const onSubmit = async (data) => {
    const picture = data.picture[0];
  };

  return (
    <StyledForm>
      <h2>{title}</h2>
      <FormContext {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBox
            type="text"
            placeholder="Title"
            name="title"
            ref={register({
              required: {
                value: true,
                message: "This field is required.",
              },
            })}
          />

          <div className="form-row">
            <div>
              <InputBox
                label="Issue number"
                type="number"
                name="issueNumber"
                ref={register()}
              />
            </div>
            <div>
              <InputBox
                label="Cover date"
                type="date"
                name="coverDate"
                ref={register()}
              />
            </div>
          </div>

          <InputBox
            type="text"
            placeholder="Volume"
            name="volume"
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
