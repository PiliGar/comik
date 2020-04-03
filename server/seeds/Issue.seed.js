const axios = require("axios");
const withDbConnection = require("../withDbConnection");
const Issue = require("../models/Issue");
require("dotenv").config();
const key = process.env.API_KEY;
const url = process.env.API_URL;

const apiURL = `${url}/issues/?api_key=${key}&format=json`;
getData(apiURL);

function getData(url) {
  axios
    .get(url)
    .then(response => {
      //console.log("--->>> RESPONSE", response.data.results);
      const res = response.data.results;
      res.forEach(issue => {
        const newIssue = {
          _id: issue.id,
          title: issue.name,
          issueNumber: issue.issue_number,
          coverDate: issue.cover_date,
          volume: issue.volume.name,
          excerpt: issue.deck,
          description: issue.description,
          picture: issue.image.original_url
        };
        withDbConnection(async () => {
          //await Professional.deleteMany();
          await Issue.create(newIssue);
        });
      });
    })
    .catch(function(error) {
      // handle error
      console.log("--->>> ERROR", error);
    });
}
