const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");

dotenv.config({ path: `./config.env` });

const DB = process.env.CONNECTION_STRING.replace(
    '<PASSWORD>',
    process.env.PASSWORD_DATABASE
  );

mongoose
    .connect(DB, {
        useNewUrlParser: true
        // useCreateIndex: true,
        // useFindAndModify: false
    })
    .then(() => console.log('DB connection successful!'));

//Default port is the one defined in the environment variable (development mode), port is 3000 otherwise (production mode):
const port = process.env.NODE_ENV === "development" ? process.env.PORT : 3000;

app.listen(port, () =>
{
    console.log(`Servidor escoitando no porto ${port}.`);
});
