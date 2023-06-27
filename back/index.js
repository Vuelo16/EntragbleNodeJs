require('dotenv').config(); //Cargar toda la importación

const Server = require('./model/server')

const server = new Server() //Creando un objeto de Server

server.listen()

// //Importar módulos
// const express = require('express')
// const app = express()
// const path = require('path') //Rutas
// const hbs = require('hbs')

// const puerto = 8082

// //Servidor de contenido estático
// app.use(express.static('public'))

// //Configuración del directorio de las vistas hbs
// app.set('views', path.join(__dirname + '/public/views'))
// app.set('view engine', 'hbs') //Motor de plantilla

// //Configuración del directorio que guardará los archivos partial hbs
// hbs.registerPartials(__dirname + '/public/views/partials');

// app.get('/', (req, res)=>{
//     res.render('home',{
//         titulo: 'home',
//         nombre: 'home'
//     })
//     //res.write('home')
//     //res.end()
// })

// app.get('/alertas', (req, res)=>{
//     res.render('alertas',{
//         titulo: 'alertas',
//         nombre: 'alertas'
//     })
//     //res.write('home')
//     //res.end()
// })

// app.get('/crearaler', (req, res)=>{
//     res.render('crearaler',{
//         titulo: 'crearaler',
//         nombre: 'crearaler'
//     })
//     //res.write('home')
//     //res.end()
// })

// app.get('/crearprov', (req, res)=>{
//     res.render('crearprov',{
//         titulo: 'crearprov',
//         nombre: 'crearprov'
//     })
//     //res.write('home')
//     //res.end()
// })

// app.get('/proveedores', (req, res)=>{
//     res.render('proveedores',{
//         titulo: 'proveedores',
//         nombre: 'proveedores'
//     })
//     //res.write('home')
//     //res.end()
// })
// app.get('/compras', (req, res)=>{
//     res.render('compras',{
//         titulo: 'compras',
//         nombre: 'compras'
//     })
//     //res.write('home')
//     //res.end()
// })
// app.get('/crearcom', (req, res)=>{
//     res.render('crearcom',{
//         titulo: 'crearcom',
//         nombre: 'crearcom'
//     })
//     //res.write('home')
//     //res.end()
// })
// app.get('/clientes', (req, res)=>{
//     res.render('clientes',{
//         titulo: 'clientes',
//         nombre: 'clientes'
//     })
//     //res.write('home')
//     //res.end()
// })
// app.get('/usuarios', (req, res)=>{
//     res.render('usuarios',{
//         titulo: 'usuarios',
//         nombre: 'usuarios'
//     })
//     //res.write('home')
//     //res.end()
// })
// app.get('/crearusuario', (req, res)=>{
//     res.render('crearusuario',{
//         titulo: 'crearusuario',
//         nombre: 'crearusuario'
//     })
//     //res.write('home')
//     //res.end()
// })
// app.get('/crearcli', (req, res)=>{
//     res.render('crearcli',{
//         titulo: 'crearcli',
//         nombre: 'crearcli'
//     })
//     //res.write('home')
//     //res.end()
// })

// app.listen(puerto, ()=>{
//     console.log(`Escuchando por el puerto ${puerto}`)
// })