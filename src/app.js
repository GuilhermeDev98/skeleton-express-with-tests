const expresss = require('express')

class AppController{
    constructor(){
        this.expresss = expresss()

        this.middlewares()
        this.routes()
    }

    middlewares(){
        this.expresss.use(expresss.json())
    }
    routes(){
        this.expresss.use(require('./routes'))
    }
}

module.exports = new AppController().expresss