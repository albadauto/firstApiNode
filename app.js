const express = require('express')
const app = express()
require('dotenv').config()
const clientes = require('./routes/Clientes')


/**
 * ROUTES
 */

app.use('/Produto', clientes)


app.listen(process.env.SERVER_PORT, () => {
console.log(`Servidor conectado na porta ${process.env.SERVER_PORT}`)
})