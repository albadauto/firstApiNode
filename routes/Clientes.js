const { application } = require('express');
const express = require('express');
const Router = express.Router();
require('../models/User')
const mongoose = require('mongoose');
const User = mongoose.model('User');

Router.get('/', (req, res, next) => {
    res.status(200).send({ message: 'TUDO CERTO POR AQUI'})
    next();
})

Router.get('/:nome_produto/:preco', (req, res, next) => {
    if (!isNaN(req.params.nome_produto)) return res.status(400).send({ message: 'Não é permitido numero'})

    res.status(200).send({ message: 'Feito com sucesso!', produto: req.params.nome_produto, preco: req.params.preco})
})

Router.post("/novoUsuario", (req,res) => {
    const novoUsuario = {
            nome:"José",
            email: "joseadauto923@gmail.com",
            cpf: "47575105867"

    }
    new User(novoUsuario).save().then(() => {
        res.status(200).send({message:"Enviado"})
    }).catch(err => console.log(err))

})
module.exports = Router