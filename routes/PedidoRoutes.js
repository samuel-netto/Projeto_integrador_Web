
const { savePedidos, listaPedidos, deletePedidos } = require('../controllers/PedidoController');
const adminAuth = require('../middlewares/authAdmin');

const router = require('express').Router();

router.get('/cadastro/save');

router.post('/cadastro/save', savePedidos);

router.get('/itempedido' , listaPedidos, adminAuth);

router.post('/itempedido/delete', deletePedidos ,adminAuth );

module.exports = router;