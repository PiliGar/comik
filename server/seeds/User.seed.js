const withDbConnection = require("../withDbConnection");
const Users = require("../models/User");
require("dotenv").config();
const adminUser = process.env.ADMIN_USER;
const adminPass = process.env.ADMIN_PASS;

let dataUsers = [
  {
    username: adminUser,
    password: adminPass,
    name: "Pilar",
    alias: "admin",
    avatar:
      "https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg",
    role: "admin",
    wantedIssues: [],
    favoritesIssues: [],
    favoritesProfessionals: [],
    favoritesPublishers: [],
    favoritesCharacters: [],
    favoriteIssues: [],
    contacts: []
  },
  {
    username: "manuela@comik.com",
    password: adminPass,
    name: "Manuela",
    alias: "admin",
    avatar:
      "https://www.ibts.org/wp-content/uploads/2017/08/iStock-476085198.jpg",
    role: "admin",
    wantedIssues: [],
    favoritesIssues: [],
    favoritesProfessionals: [],
    favoritesPublishers: [],
    favoritesCharacters: [],
    favoriteIssues: [],
    contacts: []
  }
];

withDbConnection(async () => {
  await Users.deleteMany();
  await Users.create(dataUsers);
});
