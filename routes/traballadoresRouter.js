const express = require("express");

const usuariosController = require(`${__dirname}/../controllers/traballadorController`)

const router = express.Router();

router.route("/")
    .get(usuariosController.getAllTraballadores)
    .post(usuariosController.createTraballador);

router.route("/:id")
    .get(usuariosController.getTraballador)
    .patch(usuariosController.updateTraballador)
    .delete(usuariosController.deleteTraballador);

module.exports = router;
