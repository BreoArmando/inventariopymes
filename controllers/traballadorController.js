const fs = require("fs");

const traballadoresPath = `${__dirname}/../data/traballadores.json`;
const traballadores = JSON.parse(fs.readFileSync(traballadoresPath));

/**
 * Get all users stored in source data.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.getAllTraballadores = (req, res) =>
{
    res.status(200).json({
        status: "success",
        results: traballadores.length,
        data:
        {
            traballadores
        }
    });
};

/**
 * Recovers one User object from the source data and sends it as HTTP response.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.getTraballador = (req, res) => {}

/**
 * Creates one User object, registers it in the DDBB and returns it as a HTTP response.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.createTraballador = (req, res) => 
{
    const newTraballador = Object.assign(req.body);
    console.log(newTraballador);

    res.status(200).json({
        status: "success",
        data:
        {
            newTraballador
        }
    });
};

/**
 * Changes the state of the indicated User object in the DDBB.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.updateTraballador = (req, res) => {}

/**
 * Erase the specified User object from the data source.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.deleteTraballador = (req, res) => {}
