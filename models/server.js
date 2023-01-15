
const express = require('express');

const cors = require('cors');


class Server {

    constructor(){
        this.app=express();
        this.port = process.env.PORT || 80;
        this.ipr = process.env.IP;
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
        if(process.env.NODE_ENV =='development'){
            this.app.listen(this.port,()=>{
                console.log("Aplication of nodeJs",this.port);
            });
        }

        if(process.env.NODE_ENV =='production'){
            this.app.listen(this.port,this.ipr,()=>{
                console.log("Aplication of nodeJs",this.port);
            });
        }
    
    }

}

module.exports = Server;