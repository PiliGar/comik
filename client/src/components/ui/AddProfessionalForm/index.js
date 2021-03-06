import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";

import { createProfessional } from "../../../services/professional.api";

import { useForm, FormContext } from "react-hook-form";
import { ArrowRight } from "react-feather";
import { InputBox } from "../Input/index";
import { InputUpload } from "../InputUpload/index";
import { TextAreaBox } from "../TextArea/index";
import { Button } from "../Button/index";
import { StyledForm } from "./style";

export const AddProfessionalForm = withRouter(({ history, title, c2a }) => {
  const { professionals, setProfessionals } = useContext(MainContext);
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
    const response = await createProfessional(data);
    if (response.status === "200") {
      setProfessionals([...professionals, response.newProfessional]);
      setLoading(false);
      history.push("/gallery/professionals");
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
          <div className="form-row">
            <div>
              <InputBox
                label="Birth date"
                type="date"
                placeholder="Birth date"
                name="birth"
                ref={register()}
              />
            </div>
            <div>
              <InputBox
                label="Death date"
                type="date"
                placeholder="Death date"
                name="death"
                ref={register()}
              />
            </div>
          </div>

          <InputBox
            type="text"
            placeholder="Hometown"
            name="hometown"
            ref={register()}
          />
          <InputBox
            type="text"
            placeholder="Country"
            name="country"
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
