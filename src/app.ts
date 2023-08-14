import express, { Application } from "express"


class App{
    public app: Application;
    constructor() {
        this.app = express();
        this.middlewaresInitalize();
        this.initializeRoutes();
    }

    initializeRoutes(){
       // this.app.use('/',)
    }

    interceptionError(){
        this.app.use()
    }
    middlewaresInitalize(){
        this.app.use(express.json)
        this.app.use(express.urlencoded({extended: true}))

    }
    listen(){
        this.app.listen(3333, ()=>console.log('server ins running'))
    }

}
export {App};