import React, { useContext, useEffect } from "react";
import { MainContext } from "../../../contexts/MainContext";
import { withRouter } from "react-router-dom";

import {
  updateCharacter,
  getOneCharacter,
} from "../../../services/character.api";

import { useForm, FormContext } from "react-hook-form";
import { ArrowRight } from "react-feather";
import { InputBox } from "../Input/index";
import { InputUpload } from "../InputUpload/index";
import { TextAreaBox } from "../TextArea/index";
import { Button } from "../Button/index";
import { StyledForm } from "./style";

export const EditCharacterForm = withRouter(
  ({ history, title, c2a, itemId }) => {
    const {
      character,
      setCharacter,
      characters,
      setCharacters,
      loading,
      setLoading,
    } = useContext(MainContext);

    const id = itemId;

    useEffect(() => {
      getOneCharacter(id)
        .then((data) => {
          const currentCharacter = data;
          setCharacter(currentCharacter);
        })
        .catch((e) => {
          console.error("Imposible to get current character");
        })
        .finally(() => setLoading(false));
    }, []);

    const methods = useForm({
      defaultValues: {
        name: character?.name,
        alias: character?.alias,
        realName: character?.realName,
        gender: character?.gender,
        publisher: character?.publisher,
        excerpt: character?.excerpt,
        description: character?.description,
        imageSrc: character?.imageSrc,
      },
    });
    const { register, handleSubmit, errors } = methods;

    useEffect(() => {
      if (loading) {
        setLoading(false);
      }
      methods.reset({
        name: character?.name,
        alias: character?.alias,
        realName: character?.realName,
        gender: character?.gender,
        publisher: character?.publisher,
        excerpt: character?.excerpt,
        description: character?.description,
        imageSrc: character?.imageSrc,
      });
    }, [character]);

    const onSubmit = async (data) => {
      setLoading(true);
      const imageFile = data.picture[0];
      data.picture = imageFile;
      const id = itemId;
      const formData = { ...data, id };
      const response = await updateCharacter(formData);
      if (response.status === 200) {
        setCharacter(response.obj);
        setCharacters([...characters, response.obj]);
        setLoading(false);
        history.push("/gallery/characters");
      }
    };

    return (
      <>
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
                    type="text"
                    placeholder="Alias"
                    name="alias"
                    ref={register()}
                  />
                </div>
                <div>
                  <InputBox
                    type="text"
                    placeholder="Real Name"
                    name="realName"
                    ref={register()}
                  />
                </div>
              </div>
              <InputBox
                type="text"
                placeholder="Gender"
                name="gender"
                ref={register()}
              />
              <InputBox
                type="text"
                placeholder="Publisher"
                name="publisher"
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
      </>
    );
  }
);
