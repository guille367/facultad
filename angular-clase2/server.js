'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')
const st = require('st')

const mount = st({
    path: path.join(__dirname,'..','angular-clase2'),
    index: 'productos.html'
})

http.createServer(function(req,res){
    
    /*fs.readFile(ruta,function(error,datos){
        if(!error){
            res.setHeader('Content-Type','text/html');
            res.end(datos)
            }
        else
            res.end("llegue" + error.message);
    })
    
    console.log(req);
    console.log("==================");
    console.log(res);
    */
    
    mount(req,res, function(err){
       if(err) 
        res.end(err.message)
        
        res.end("Error aparte")
    })
    
}).listen(8090)

console.log("esperando requestos")