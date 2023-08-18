const Traballador = require(`${__dirname}/../models/traballadorModel`);

/**
 * Get all users stored in source data.
 * @param {Request} req 
 * @param {Response} res 
*/
exports.getAllTraballadores = async (req, res) =>
{
    try
    {
        const traballadores = await Traballador.find();

        res.status(200).json({
            status: "success",
            results: traballadores.length,
            data:
            {
                traballadores
            }
        });
    }
    catch(err)
    {
        res.status(400).json({
            status: "fail",
            message: err
        })
    }
};

/**
 * Recovers one User object from the source data and sends it as HTTP response.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.getTraballador = async (req, res) => 
{
    try
    {
        const traballador = await Traballador.findById(req.params.id);

        res.status(200).json({
            status: "success",
            data:
            {
                traballador
            }
        });
    }
    catch (error)
    {
        res.status(400).json({
            status: "fail",
            message: error
        });
    }
    
}

/**
 * Creates one User object, registers it in the DDBB and returns it as a HTTP response.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.createTraballador = (req, res) => 
{
    const newTraballador = Object.assign(req.body);

    res.status(200).json({
        status: "success",
        data:
        {
            novoTraballador: newTraballador
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
