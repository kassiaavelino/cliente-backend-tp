const express = require('express');
const UsuarioControler = require ('../controllers/usuarioController');
const ProdutosControler = require ('../controllers/produtosController');
const router = express.Router();

router.post('/usuarios', UsuarioControler.Insert);
router.get('/usuarios', UsuarioControler.SelectAll);
router.get('/usuarios/:id', UsuarioControler.SelectDetail);

router.post('/produtos', ProdutosControler.Insert);
router.get('/produtos', ProdutosControler.SelectAll);
router.get('/produtos/:id', ProdutosControler.SelectDetail);

module.exports = router;