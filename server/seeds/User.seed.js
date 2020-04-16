const withDbConnection = require("../withDbConnection");
const Users = require("../models/User");
require("dotenv").config();

let dataUsers = [
  {
    email: process.env.ADMIN_USER,
    password: process.env.ADMIN_PASS,
    name: "Pilar",
    alias: "admin",
    imgName: "avatar",
    imgSrc:
      "https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg",
    role: "admin",
    wantedIssues: [],
    favoritesIssues: [],
    favoritesProfessionals: [],
    favoritesPublishers: [],
    favoritesCharacters: [],
    favoriteIssues: [],
    contacts: [],
  },
  {
    email: "manuela@comik.com",
    password: process.env.ADMIN_PASS,
    name: "Manuela",
    alias: "admin",
    imgName: "avatar",
    imgSrc:
      "https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg",
    role: "admin",
    wantedIssues: [],
    favoritesIssues: [],
    favoritesProfessionals: [],
    favoritesPublishers: [],
    favoritesCharacters: [],
    favoriteIssues: [],
    contacts: [],
  },
];

withDbConnection(async () => {
  await Users.deleteMany();
  await Users.create(dataUsers);
});
