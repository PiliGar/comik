import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";

import {
  updatePublisher,
  getOnePublisher,
} from "../../../services/publisher.api";

import { useForm, FormContext } from "react-hook-form";
import { ArrowRight } from "react-feather";
import { InputBox } from "../Input/index";
import { InputUpload } from "../InputUpload/index";
import { TextAreaBox } from "../TextArea/index";
import { Button } from "../Button/index";
import { StyledForm } from "./style";

export const EditPublisherForm = withRouter(
  ({ history, title, c2a, itemId }) => {
    const {
      publisher,
      setPublisher,
      publishers,
      setPublishers,
      loading,
      setLoading,
    } = useContext(MainContext);

    const id = itemId;

    useEffect(() => {
      getOnePublisher(id)
        .then((data) => {
          const currentPublisher = data.obj;
          setPublisher(currentPublisher);
        })
        .catch((e) => {
          console.error("Imposible to get current publisher");
        })
        .finally(() => setLoading(false));
    }, []);

    const methods = useForm({
      defaultValues: {
        name: publisher?.name,
        locationAddress: publisher?.locationAddress,
        locationCity: publisher?.locationCity,
        locationState: publisher?.locationState,
        excerpt: publisher?.excerpt,
        description: publisher?.description,
        imageSrc: publisher?.imageSrc,
      },
    });
    const { register, handleSubmit, errors } = methods;

    useEffect(() => {
      if (loading) {
        setLoading(false);
      }
      methods.reset({
        name: publisher?.name,
        locationAddress: publisher?.locationAddress,
        locationCity: publisher?.locationCity,
        locationState: publisher?.locationState,
        excerpt: publisher?.excerpt,
        description: publisher?.description,
        imageSrc: publisher?.imageSrc,
      });
    }, [publisher]);

    const onSubmit = async (data) => {
      setLoading(true);
      const imageFile = data.picture[0];
      data.picture = imageFile;
      const id = itemId;
      const formData = { ...data, id };
      const response = await updatePublisher(formData);
      if (response.status === 200) {
        setPublisher(response.obj);
        setPublishers([...publishers, response.obj]);
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
  }
);
