const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    },
    equipe: {
        type: String
    },
    piloto: {
        type: String
    }
})

module.exports = mongoose.model('usuarios', UsuarioSchema)