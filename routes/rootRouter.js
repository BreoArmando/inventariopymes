const express = require("express");
const router = express.Router();

const rootController = require(`${__dirname}/../controllers/rootController`);

router
    .route("/")
    .get(rootController.getRootURL);

module.exports = router;
