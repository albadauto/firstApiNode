const express = require('express')
const app = express()
require('dotenv').config()
const clientes = require('./routes/Clientes')
const port = process.env.SERVER_PORT || 3000


/**
 * ROUTES
 */

app.use('/Produto', clientes)

app.use((req,res, next) => {
    const error = new Error('Não encontrado')
    error.status(404)
    next(error)
})

app.listen(process.env.SERVER_PORT, () => {
console.log(`Servidor conectado na porta ${port}`)
})