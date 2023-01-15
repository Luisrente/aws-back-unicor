
const express = require('express');

const cors = require('cors');


class Server {

    constructor(){
        this.app=express();
        this.port = process.env.PORT || 80;
        this.userPath = '/api/users'
        // Middlewares
        this.middlewares();
        // Routes 
        this.routes();
    }
    

    middlewares(){
        this.app.use(cors())
        this.app.use(express.static('public'));
    }


    routes(){
        this.app.use(this.userPath , require('../routes/user'))


    }

    lister(){
        this.app.listen(this.port, process.env.IP, ()=>{
            console.log("Aplication of nodeJs",this.port);
        });
    }

}

module.exports = Server;