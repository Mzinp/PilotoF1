const express = require('express');
const app = express();
const path = require('path');
const port = 8080;
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoose  = require('mongoose');
const session = require('express-session')
require('./ConnectMongoose')
const { endereco } = require('./ConnectMongoose')
console.log(endereco)

//recados                               
mongoose.set('strictQuery', true)
//conecçao mongo
mongoose.connect(endereco, {
    serverSelectionTimeoutMS: 5000
})
.then(() => {
    console.log('conectado com o mongo')
}).catch((error) => {
    console.log(`Houve um erro: ${error}`)
})

// models
require('./models/Usuarios')
const Usuario = mongoose.model('usuarios')

//handlebars
    app.engine('handlebars', handlebars.engine({
        defaultLayout: 'main',
        partialsDir:path.join(__dirname, 'views/components')
    }))
    app.set('view engine', 'handlebars')
//public
    app.use(express.static(path.join(__dirname, "/public")))
// body-parser
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(bodyParser.json())
//rotas
    app.get('/', (req, res) => {
        res.render('index')
    })

    app.get('/registro', (req, res) => {
        res.render('registro')
    })

    app.post('/registro/add', (req, res) => {
        console.log("BODY RECEBIDO:", req.body);

    const novoUsuario = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            equipe: req.body.equipe,
            piloto: req.body.piloto
        }
    new Usuario(novoUsuario).save().then(() => {
            console.log('salvo com succeso')
            res.render('index', {nome: novoUsuario.nome})
        }).catch((erro) => {
            console.log(`Houve um erro: ${erro}`)
            res.redirect("/registro")
        })

        })
//porta 8080
    app.listen(port, () => {
        console.log('esta ligado na porta 8080')
    })