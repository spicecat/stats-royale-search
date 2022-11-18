const { getInfo } = require('./client');

const ytController = async ({ query }, res) =>
    res.status(200).send(await getInfo())

module.exports = { ytController };