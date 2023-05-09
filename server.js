const mongoose = require("mongoose");

const app = require("./app");

const {DB_HOST} = require("./config")

mongoose.set('strictQuery', true)

mongoose.connect(DB_HOST)
.then(() => {
  app.listen(300)
  console.log("Database connection successful");
})
.catch(error => {
  console.log(error);
  process.exit(1)
})