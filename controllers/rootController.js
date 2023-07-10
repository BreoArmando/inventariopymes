exports.getRootURL = (req, res) =>
{
    res.status(404).json({
        status: "fail",
        message: "Unhandled endpoint"
    });
};
