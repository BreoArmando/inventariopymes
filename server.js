const dotenv = require("dotenv");
const app = require("./app");
const mongoose = require("mongoose");

dotenv.config({ path: `./config.env` });

//https://thecodebarbarian.com/how-find-works-in-mongoose.html

const DB = process.env.CONNECTION_STRING.replace(
    '<PASSWORD>',
    process.env.DB_PASSWORD
  );

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        // useFindAndModify: false,
        // useUnifiedTopology: true,
        // useNewUrlParser: true
    })
    .then((connection) => console.log('Conexión coa BBDDs completada!'))
    .catch(() => console.log('Conexión coa BBDDs non completada...'));

//Default port is the one defined in the environment variable (development mode), port is 3000 otherwise (production mode):
const port = process.env.NODE_ENV === "development" ? process.env.PORT : 3000;

app.listen(port, () =>
{
    console.log(`Servidor escoitando no porto ${port}.`);
});
