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

      //** GET EACH PROFESSIONAL DATA
      const values = await Promise.allSettled(
        res
          .filter((e) => e.id !== null)
          .map(async (person) =>
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
            //---> array of USUES IDs after created in DB
            const issuesIds = [];

            //** GET EACH ISSUE DATA
            const valuesIssues = await Promise.allSettled(
              arr
                .filter((e) => e.id !== null)
                .map(async (issue) =>
                  axios.get(
                    `${process.env.API_URL}/issue/4000-${issue.id}/?api_key=${process.env.API_KEY}&format=json`
                  )
                )
            );
            valuesIssues.forEach((r) => {
              if (r.value) {
                const issue = r.value.data.results;
                const newIssue = {
                  title: issue.name,
                  issueNumber: issue.issue_number,
                  coverDate: getDate(issue.cover_date),
                  volume: issue.volume.name,
                  excerpt: issue.deck,
                  description: issue.description,
                  picture: issue.image.original_url,
                };
                //console.log("NEW ISSUE", newIssue);

                //---> Create new issue in DB
                //---> Get the _id of each issue, push to an array and pass it to the newProfessional object ??

                //withDbConnection(async () => {
                // await Issue.save((err, newIssue) => {
                //     if (err) return `Error occurred while saving ${err}`;

                //     const { _id } = newIssue;
                //     issuesIds.push(_id);
                // });
                //});
              }
            });
            return issuesIds;
          };
          const professionalIssues = getIssues(arrOfIssues);

          newProfessionals.push({
            name: professional.name,
            birth: getDate(professional.birth),
            death: getDate(professional.death),
            country: professional.country,
            hometown: professional.hometown,
            //---> Array of ISUES IDS
            issues: professionalIssues,
            excerpt: professional.deck,
            description: professional.description,
            picture: professional.image.original_url,
          });

          //---> Create Professionals in DB all the arr at once

          //withDbConnection(async () => {
          //await Professional.insertMany(newProfessionals)

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
