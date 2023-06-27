
const { Schema, model } = require('mongoose')


const ProductoSchema = Schema({
    nombreProd: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'La descripcion es obligatoria']
    },
    categoria: {
        type: String,
        enum: ['Lacteos', 'Abarrotes', 'Aseo', 'Licores'],
        required: [true, 'La categoria es obligatoria']
    },
    stock: {
        type: Number,
        required : [true, 'El stock es obligatorio'],
        
    },
    stock_min: {
        type: Number,
        required : [true, 'El stock minimo es obligatorio'],
       
    },
    valor_uni: {
        type: Number,
        required : [true, 'El valor unitario es obligatorio'],
   
    },
    estadoProd: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obligatorio']
    }
})

module.exports = model('Producto', ProductoSchema)