import express from 'express'
import cors from 'cors';
import dbconnection from '../database/config.js';

class server{
    constructor(){
        this.port = process.env.PORT;
        this.app = express();
        this.conectarBD();
        this.middlewares();
        this.routes();
    }
    routes(){

    }
    async conectarBD(){
       await dbconnection();
    }
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
        this.app.use(express.static('public'));
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`servidor corriendo en el puerto ${this.port}`);
        });   
    }
}

export default server 