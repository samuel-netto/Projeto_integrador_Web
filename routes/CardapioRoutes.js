const { imageUpload } = require('../middlewares/imageUpload');
const { formCardapio, saveItemCardapio, formEdicaoCardapio, salvaAltCardapio, listaItemCardapio, deleteCardapio } = require('../controllers/CardapioController');
const adminAuth = require('../middlewares/authAdmin');

const router = require('express').Router();

router.get('/cadastro', adminAuth ,formCardapio);

router.post('/cadastro/save', imageUpload.single('image'), adminAuth, saveItemCardapio);

router.get('/itemcardapio', adminAuth , listaItemCardapio);

router.get('/itemcardapio/edit/:id',imageUpload.single('image'), formEdicaoCardapio ,adminAuth );

router.post('/itemcardapio/edit', salvaAltCardapio ,adminAuth);

router.post('/itemcardapio/delete', deleteCardapio ,adminAuth );

module.exports = router;