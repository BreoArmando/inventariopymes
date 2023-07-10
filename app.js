const express = require("express");

const rootRouter = require("./routes/rootRouter");
const usuariosRouter = require("./routes/traballadoresRouter");
const produtosRouter = require("./routes/produtosRouter");

const app = express();

app.use(express.json());

app.use("/", rootRouter);
app.use("/api/v1/usuarios", usuariosRouter);
app.use("/api/v1/produtos", produtosRouter);

module.exports = app;
