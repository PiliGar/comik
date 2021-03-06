const axios = require("axios");
const withDbConnection = require("../withDbConnection");
const Professional = require("../models/Professional");
require("dotenv").config();

const apiURL = `${process.env.API_URL}/people/?api_key=${process.env.API_KEY}&format=json&limit=70`;
getData(apiURL);

function getData(url) {
  axios
    .get(url)
    .then((response) => {
      const res = response.data.results;
      res.forEach((professional) => {
        const newProfessional = {
          name: professional.name,
          birth: professional.birth,
          death: professional.death,
          country: professional.country,
          hometown: professional.hometown,
          excerpt: professional.deck,
          description: professional.description,
          imageName: professional.name,
          imageSrc: professional.image.original_url,
        };
        console.log(newProfessional);

        withDbConnection(async () => {
          //await Professional.deleteMany();
          await Professional.create(newProfessional);
        });
      });
    })
    .catch(function (error) {
      // handle error
      console.log("--->>> ERROR", error);
    });
}
