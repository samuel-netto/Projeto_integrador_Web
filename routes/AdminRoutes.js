const { Router } = require('express');
const router = Router();

const { loginForm, formCadastroUsuario, cadastroUsuario, login, logout, formEdicaoUsuario, salvaAltUsuario } = require('../controllers/AdminController');
const { listaUsuarios, deleteUser } = require('../controllers/UserController');
const adminAuth = require('../middlewares/authAdmin');
const validaForm = require('../middlewares/validador');

router.get('/', loginForm);

router.get('/logout', adminAuth, logout);

router.get('/cadastro/user', adminAuth, formCadastroUsuario);

router.post('/cadastro/user', adminAuth, validaForm, cadastroUsuario);

router.post('/user/login', login);

router.get('/users', adminAuth, listaUsuarios);

router.post('/user/delete', adminAuth, deleteUser);

router.get('/user/edit/:id',adminAuth, formEdicaoUsuario);

router.post('/user/edit',adminAuth, salvaAltUsuario);

module.exports = router;
