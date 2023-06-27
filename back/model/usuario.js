const { Schema, model } = require('mongoose')


const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    rol: {
        type: String,
        enum:['Admin','Usuario'],
        required: [true, 'El rol es obligatorio']
    },
    
    email: {
        type: String,
        required : [true, 'El email es obligatorio'],
        min : 1
    },
    telefono: {
        type: Number,
        required : [true, 'El telefono es obligatorio'],
        min : 0
    },
    contrasena: {
        type: String,
        required : [true, 'La contraseña es obligatoria'],
        min : 1
    },
    confirmar: {
        type: String,
        required: [true, 'La confirmacion es obligatoria']
    },
    estado: {
        type: Boolean,
        default: true,
        required: [true, 'El estado es obigatorio']
    }
})

module.exports = model('Usuario', UsuarioSchema)