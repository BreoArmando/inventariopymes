const Produto = require(`${__dirname}/../models/produtoModel`);

/**
 * Get all products stored in source data.
 * @param {Request} req
 * @param {Response} res 
 */
exports.getAllProdutos = async (req, res) =>
{
    const produtos = await Produto.find();

    res.status(200).json({
        status: "success",
        results: produtos.length,
        data:
        {
            produtos
        }
    });
};

/**
 * Recovers one Product object from the source data and sends it as HTTP response.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.getProduto = (req, res) => {}

/**
 * Creates one Product object, registers it in the DDBB and returns it as a HTTP response.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.createProduto = (req, res) => {}

/**
 * Changes the state of the indicated Product object in the DDBB.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.updateProduto = (req, res) => {}

/**
 * Erase the specified Product object from the data source.
 * @param {Request} req 
 * @param {Response} res 
 */
exports.deleteProduto = (req, res) => {}
