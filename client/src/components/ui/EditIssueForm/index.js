import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";

import { updateIssue, getOneIssue } from "../../../services/issue.api";

import { useForm, FormContext } from "react-hook-form";
import { ArrowRight } from "react-feather";
import { InputBox } from "../Input/index";
import { InputUpload } from "../InputUpload/index";
import { TextAreaBox } from "../TextArea/index";
import { Button } from "../Button/index";
import { StyledForm } from "./style";

export const EditIssueForm = withRouter(({ history, title, c2a, itemId }) => {
  const {
    issue,
    setIssue,
    issues,
    setIssues,
    loading,
    setLoading,
  } = useContext(MainContext);

  const id = itemId;

  useEffect(() => {
    getOneIssue(id)
      .then((data) => {
        const currentIssue = data.obj;
        setIssue(currentIssue);
      })
      .catch((e) => {
        console.error("Imposible to get current issue");
      })
      .finally(() => setLoading(false));
  }, []);

  const methods = useForm({
    defaultValues: {
      title: issue?.title,
      issueNumber: issue?.issueNumber,
      coverDate: issue?.coverDate,
      volume: issue?.volume,
      excerpt: issue?.excerpt,
      description: issue?.description,
      imageSrc: issue?.imageSrc,
    },
  });
  const { register, handleSubmit, errors } = methods;

  useEffect(() => {
    if (loading) {
      setLoading(false);
    }
    methods.reset({
      title: issue?.title,
      issueNumber: issue?.issueNumber,
      coverDate: issue?.coverDate,
      volume: issue?.volume,
      excerpt: issue?.excerpt,
      description: issue?.description,
      imageSrc: issue?.imageSrc,
    });
  }, [issue]);

  const onSubmit = async (data) => {
    setLoading(true);
    const imageFile = data.picture[0];
    data.picture = imageFile;
    const id = itemId;
    const formData = { ...data, id };
    const response = await updateIssue(formData);
    if (response.status === 200) {
      setIssue(response.obj);
      setIssues([...issues, response.obj]);
      setLoading(false);
      history.push("/gallery/issues");
    }
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
            ref={register()}
          />
          <TextAreaBox
            name="description"
            placeholder="Description"
            rowsNumber="3"
            ref={register()}
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
