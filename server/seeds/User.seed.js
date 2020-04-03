const withDbConnection = require("../withDbConnection");
const Users = require("../models/User");

let dataUsers = [
  {
    username: "pilar@comik.com",
    password: "Pilar123",
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
    password: "Manuela123",
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
