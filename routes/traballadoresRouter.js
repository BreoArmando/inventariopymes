const express = require("express");

const traballadorController = require(`${__dirname}/../controllers/traballadorController`)

const router = express.Router();

router.route("/")
    .get(traballadorController.getAllTraballadores)
    .post(traballadorController.createTraballador);

router.route("/:id")
    .get(traballadorController.getTraballador)
    .patch(traballadorController.updateTraballador)
    .delete(traballadorController.deleteTraballador);

module.exports = router;
