const express = require('express')

const cors = require('cors')

const bodyParser = require('body-parser')

const dbConection = require('../database/config')

class server{

    constructor () {
        
        this.app = express()

        this.port = process.env.PORT

        this.productoPath = '/api/producto' 
        this.usuarioPath = '/api/usuario'

        this.middlewares()

        this.routes()

        this.dbconectar()

    }

    middlewares() 
    {
        this.app.use(express.static(__dirname + "/public"));
        this.app.use(cors());
        this.app.use(bodyParser.json());
    }

    routes()
    {
        this.app.use(this.productoPath, require('../routes/productos'))
        this.app.use(this.usuarioPath, require('../routes/usuarios'))
    }

    async dbconectar(){
        await dbConection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Escuchando el puerto ${this.port}`)
        })
    }
}

module.exports = server