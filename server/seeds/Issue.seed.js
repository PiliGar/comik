const axios = require("axios");
const withDbConnection = require("../withDbConnection");
const Issue = require("../models/Issue");
require("dotenv").config();

const apiURL = `${process.env.API_URL}/issues/?api_key=${process.env.API_KEY}&format=json`;
getData(apiURL);

function getData(url) {
  axios
    .get(url)
    .then((response) => {
      const res = response.data.results;
      res.forEach((issue) => {
        const newIssue = {
          title: issue.name,
          issueNumber: issue.issue_number,
          coverDate: issue.cover_date,
          volume: issue.volume.name,
          excerpt: issue.deck,
          description: issue.description,
          imageName: issue.name,
          imageSrc: issue.image.original_url,
        };
        withDbConnection(async () => {
          //await Professional.deleteMany();
          await Issue.create(newIssue);
        });
      });
    })
    .catch(function (error) {
      // handle error
      console.log("--->>> ERROR", error);
    });
}
