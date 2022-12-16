const User = require("../models/User");

async function listaUsuarios(req, res) {
    const msgError = await req.consumeFlash('error');
    const msgSuccess = await req.consumeFlash('success');
    User.findAll().then(users => {
        res.render('admin/users', { users, msgSuccess, msgError });
    });
}

function deleteUser(req, res) {
    const id = req.body.id;
    if(id == undefined || id == '') {
        res.redirect('/admin/users');
    } else {
        User.destroy({
            where: { id: id}
        }).then(()=> {
            res.redirect('/admin/users');
        }).catch(err => {
            console.log(err);
        });
    }
}

module.exports = { listaUsuarios, deleteUser };