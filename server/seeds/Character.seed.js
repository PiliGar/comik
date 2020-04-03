const axios = require("axios");
const withDbConnection = require("../withDbConnection");
const Character = require("../models/Character");
require("dotenv").config();
const key = process.env.API_KEY;
const url = process.env.API_URL;

const apiURL = `${url}/characters/?api_key=${key}&format=json`;
getData(apiURL);

function getData(url) {
  axios
    .get(url)
    .then(response => {
      //console.log("--->>> RESPONSE", response.data.results);
      const res = response.data.results;
      res.forEach(character => {
        const newCharacter = {
          _id: character.id,
          name: character.name,
          alias: character.aliases,
          realName: character.real_name,
          gender: character.gender,
          publisher: character.publisher.name,
          publisherId: character.publisher.id,
          excerpt: character.deck,
          description: character.description,
          picture: character.image.original_url
        };
        withDbConnection(async () => {
          //await Professional.deleteMany();
          await Character.create(newCharacter);
        });
      });
    })
    .catch(function(error) {
      // handle error
      console.log("--->>> ERROR", error);
    });
}
