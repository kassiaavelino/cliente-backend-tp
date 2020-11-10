const { INTEGER } = require('sequelize');
const Sequelize = require('sequelize');
 
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
//Produtos (id, nome, preço de custo, preço de venda, qtd estoque)
const Produtos = sequelize.define("produtos", {
    p_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    p_nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    p_descricao: {
        allowNull: false,
        type: Sequelize.STRING(500),
        validate: {
            len: [10, 500]
        }
    },
    p_precocusto: {
        allowNull: false,
        type: Sequelize.DOUBLE
    },
    p_precovenda: {
        allowNull: false,
        type: Sequelize.DOUBLE
    },
    qtd_estoque:{
        allowNull: false,
        type: Sequelize.INTEGER
    }
});
 
module.exports = Produtos;