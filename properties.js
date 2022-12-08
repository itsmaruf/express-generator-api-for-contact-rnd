// dotenv
require("dotenv").config();

const { MongoClient, ServerApiVersion } = require("mongodb");
module.exports = {
  DB_PORT: 4300,
  DB_URL: `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@cluster0.ju0z9gl.mongodb.net/?retryWrites=true&w=majority`,
};
