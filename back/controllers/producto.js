const { response } = require('express')
const Producto = require('../model/producto')



const getProducto = async (req, res = response) => {
    let mensaje = ''
    try {
     
        const productos = await Producto.find()
        mensaje = productos
    } catch (error) {
        mensaje = error
    }

    res.json({
        productos:mensaje
    })
}

const postProducto = async (req, res = response) => {

    const body = req.body
    let mensaje = ''
    console.log('Ingresa')
    const producto = new Producto(body) 
    console.log(body)

    try {
        await producto.save()
        mensaje = 'Producto registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
}


const putProducto = async (req, res = response) => {
    const body = req.body
    console.log(body)

    let mensaje = ''
    try {
        if(body.tipoModificacion == 'Unitaria'){
        await Producto.findOneAndUpdate({ _id:body._id},{nombreProd:body.nombreProd, descripcion:body.descripcion, categoria:body.categoria, stock:body.stock , stock_min:body.stock_min, valor_uni:body.valor_uni, estadoProd:body.estadoProd})
        mensaje = 'Producto modificacado exitosamente, modificacion unitaria'
    }
    else{
        await Producto.updateMany({ _id:body._id},{nombreProd:body.nombreProd, descripcion:body.descripcion, categoria:body.categoria, stock:body.stock, stock_min:body.stock_min, valor_uni:body.valor_uni, estadoProd:body.estadoProd})
        mensaje = 'Producto modificacado exitosamente, modificacion multiple'
    }
    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje:mensaje
    })
}

const deleteProducto = async(req, res = response) => {
    const body = req.body
    let mensaje = ''

    try{
        await Producto.deleteOne({_id:body._id})
        mensaje = 'Eliminación exitosa'
    }catch(error){
        mensaje = error
    }
    res.json({
        mensaje
    })
}
module.exports = {
    getProducto,
    postProducto,
    putProducto,
    deleteProducto
}