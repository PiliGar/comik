const axios = require("axios");
const withDbConnection = require("../withDbConnection");
const Character = require("../models/Character");
require("dotenv").config();

const apiURL = `${process.env.API_URL}/characters/?api_key=${process.env.API_KEY}&format=json`;
getData(apiURL);

function getData(url) {
  axios
    .get(url)
    .then((response) => {
      const res = response.data.results;
      res.forEach((character) => {
        const newCharacter = {
          name: character.name,
          alias: character.aliases,
          realName: character.real_name,
          gender: character.gender,
          publisher: character.publisher.name,
          excerpt: character.deck,
          description: character.description,
          imageName: character.name,
          imageSrc: character.image.original_url,
        };
        withDbConnection(async () => {
          //await Professional.deleteMany();
          await Character.create(newCharacter);
        });
      });
    })
    .catch(function (error) {
      // handle error
      console.log("--->>> ERROR", error);
    });
}
