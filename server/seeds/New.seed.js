const axios = require("axios");
const withDbConnection = require("../withDbConnection");
const Professional = require("../models/Professional");
const Issue = require("../models/Issue");
require("dotenv").config();

const newProfessionals = [];
const apiURL = `${process.env.API_URL}/people/?api_key=${process.env.API_KEY}&format=json&limit=1`;
getData(apiURL);

function getData(url) {
  axios
    .get(url)
    .then(async (response) => {
      const res = response.data.results;
      const values = await Promise.allSettled(
        res.map(async (person) =>
          axios.get(
            `${process.env.API_URL}/person/4040-${person.id}/?api_key=${process.env.API_KEY}&format=json`
          )
        )
      );
      values.forEach((res) => {
        if (res.value) {
          const professional = res.value.data.results;

          const arrOfIssues = professional.issues;

          const getIssues = async (arr) => {
            const issues = await Promise.allSettled(
              arr.filter((e) => e.id !== null).map((e) => e.id)
            );
            // issues.forEach((issue) => {
            //   console.log("VALUE", issue.value);
            // });
            // console.log("NUMBER OF ISSUES", issues.length);

            const arrOfIssuesId = issues.map((issue) => issue.value);

            return arrOfIssuesId;
          };
          getIssues(arrOfIssues)
            .then(async (response) => {
              console.log("A VER", response);
            })
            .catch(function (error) {
              // handle error
              console.log("--->>> ERROR", error);
            });

          newProfessionals.push({
            name: professional.name,
            birth: getDate(professional.birth),
            death: getDate(professional.death),
            country: professional.country,
            hometown: professional.hometown,
            excerpt: professional.deck,
            description: professional.description,
            picture: professional.image.original_url,
          });

          //withDbConnection(async () => {
          //await Professional.deleteMany();
          //await Professional.create(newProfessionals);
          //});
        }
      });
    })
    .catch(function (error) {
      // handle error
      console.log("--->>> ERROR", error);
    });
}

const getDate = (value) => {
  if (typeof value === "object" && value) {
    return value.date;
  }

  return value;
};
