const axios = require("axios");
const withDbConnection = require("../withDbConnection");
const Publisher = require("../models/Publisher");
require("dotenv").config();
const key = process.env.API_KEY;
const url = process.env.API_URL;

const apiURL = `${url}/publishers/?api_key=${key}&format=json`;
getData(apiURL);

function getData(url) {
  axios
    .get(url)
    .then(response => {
      //console.log("--->>> RESPONSE", response.data.results);
      const res = response.data.results;
      res.forEach(publisher => {
        const newPublisher = {
          _id: publisher.id,
          name: publisher.name,
          locationAddress: publisher.location_address,
          locationCity: publisher.location_city,
          locationState: publisher.location_state,
          excerpt: publisher.deck,
          description: publisher.description,
          picture: publisher.image.original_url
        };
        withDbConnection(async () => {
          //await Professional.deleteMany();
          await Publisher.create(newPublisher);
        });
      });
    })
    .catch(function(error) {
      // handle error
      console.log("--->>> ERROR", error);
    });
}