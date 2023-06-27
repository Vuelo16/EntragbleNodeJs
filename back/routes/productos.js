const { Router } = require('express')

const route = Router()

//Importar el controlador
const { getProducto, postProducto, putProducto, deleteProducto } = require('../controllers/producto')

route.get('/', getProducto)

route.post('/', postProducto)

route.put('/', putProducto)

route.delete('/', deleteProducto)

module.exports = route