const { getPackageDescriptionNpm } = require('utils-playground');

const acharPacote = (async (req, res) => {
    const { nomePacote } = req.params

    const descricaoPacote = await getPackageDescriptionNpm('express');

    return res.send(descricaoPacote);
})

module.exports = acharPacote