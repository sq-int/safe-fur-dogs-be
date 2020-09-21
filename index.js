// dotenv
require("dotenv").config();
// import server
const server = require("./api/server.js");

server.listen(process.env.PORT, () =>
  console.log(`Server running on port: ${process.env.PORT}`)
);
