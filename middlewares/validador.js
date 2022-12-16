function validaForm(req, res, next) {
	const { username, password } = req.body;

	if (username == undefined || username == '') {
		res.redirect('/admin/cadastro/user');
	} else if (password == undefined || password.length < 6) {
		res.redirect('/admin/cadastro/user');
	} else {
		next();
	}
}



module.exports = validaForm;