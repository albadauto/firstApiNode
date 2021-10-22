const express = require('express')
const app = express()
require('dotenv').config()
const clientes = require('./routes/Clientes')
const port = process.env.SERVER_PORT || 3000
const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/Api").then(() => {
    console.log("Banco de dados conectado!")
}).catch(err => console.error(err))

/**
 * ROUTES
 */
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/Produto', clientes)


app.listen(process.env.SERVER_PORT, () => {
console.log(`Servidor conectado na porta ${port}`)
})