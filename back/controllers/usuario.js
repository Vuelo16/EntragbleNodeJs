const {response} = require('express')
const Usuario = require('../model/usuario')
const bcrypt = require('bcrypt')

const getUsuario = async(req, res=response) => {
    let mensaje = ''
    try {
       
        const usuarios = await Usuario.find()
        mensaje = usuarios
    } catch (error) {
        mensaje = error
    }

   res.json({
        usuarios:mensaje
    })
    
}

const postUsuario = async(req, res = response) =>{

    const body = req.body
    let mensaje = ''
    const usuario = new Usuario(body)
    
    
    try {
        await usuario.save()
        mensaje = 'Usuario registrado exitosamente'
    } catch (error) {
        mensaje = error
    }

    res.json({
        mensaje
    })
   
}

const putUsuario = async(req, res = response) =>{
    
    const body = req.body 
     console.log(body)

    let mensaje = ''

    try {
        if(body.tipoModificacion == 'Unitaria'){
            await Usuario.findOneAndUpdate({_id:body._id}, {nombre:body.nombre, rol:body.rol, email:body.email, telefono:body.telefono, estado:body.estado})

            mensaje = 'Usuario modificado exitosamente. Modificación: Sencilla'
        }
        else{
            await Usuario.updateMany({_id:body._id}, {nombre:body.nombre, rol:body.rol, email:body.email, telefono:body.telefono, estado:body.estado})
            mensaje = 'Usuario modificado exitosamente. Modificación: Múltiple'
        }


    } catch (error) {
        mensaje = error
    }
   
    res.json({
        mensaje:mensaje
    })
   
}

const deleteUsuario = async(req, res = response) =>{
    
    const body = req.body
    let mensaje = ''

    try {
        await Usuario.deleteOne({_id:body._id})
        mensaje = 'Eliminado exitosamente'
    } catch (error) {
        mensaje = error
    }
    res.json({
        mensaje
    })
   
}

module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}