const Sequelize = require('sequelize');
 
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
//Clientes (id, nome, end, email, telefone)
const Usuario = sequelize.define("usuario", {
    id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    email:{
        allowNull: false,
        type: Sequelize.STRING(100)
    },
    senha:{
        allowNull: false,
        type: Sequelize.STRING(15),
        validate: {
            len: [6, 15]
        }
    },
    endereco:{
        allowNull: false,
        type: Sequelize.STRING(200)
    },
    cidade:{
        allowNull: false,
        type: Sequelize.STRING(200)
    },
    estado:{
        allowNull: false,
        type: Sequelize.STRING(200)
    },
    cep:{
        allowNull: false,
        type: Sequelize.STRING(200)
    },    
    telefone:{
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    }
});
 
module.exports = Usuario;