const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = require("./app");

dotenv.config();

const DB = process.env.DB_URL.replace("<password>", process.env.DB_PASS)
  .replace("<username>", process.env.DB_USER)
  .replace("<DB>", process.env.DB_NAME);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    autoIndex: true,
  })
  .then(() => {
    console.log("DB connection successful!");
  });

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
