const Dado = require("../models/Dado");

function formCardapio(req, res) {
  res.render('admin/cadastroItemCardapio');
}

function saveItemCardapio(req, res) {
  const { nome, descricao, preco } = req.body;
  const img = req.file.originalname;
  try {
    Dado.create({
      nome,
      descricao,
      preco,
      img
    })
  } catch (error) {
    console.log(error);
  }
  res.redirect('/cardapio/cadastro');
}

function formEdicaoCardapio(req, res) {
  res.render('/cardapio/itemcardapio')
}

function formEdicaoCardapio(req, res) {
  const id = req.params.id;
  Dado.findByPk(id).then(dados => {
    if (dados == undefined) {
      res.redirect('/cardapio/itemcardapio');
    } else {
      res.render('cardapio/editcardapio', { dados });
    }
  }).catch(err => {
    console.log(err);
    res.redirect('/cardapio/itemcardapio');
  })

}

function salvaAltCardapio(req, res) {
  const { id, nome, descricao, preco } = req.body;

  Dado.update(
    { nome, descricao, preco },
    { where: { id: id } }
  ).then(async () => {
    await req.flash('success', 'Dados do usuário alterado com sucesso!');
    res.redirect('/cardapio/itemcardapio')
  }).catch(async err => {
    console.log(err);
    await req.flash('error', 'Usuário ou senha inválida, tente novamente!');
    res.redirect('/cardapio/itemcardapio')
  })
}

async function listaItemCardapio(req, res) {
  const msgError = await req.consumeFlash('error');
  const msgSuccess = await req.consumeFlash('success');
  Dado.findAll().then(dados => {
    res.render('admin/itemcardapio', { dados, msgSuccess, msgError });
  })
}

function deleteCardapio(req, res) {
  const id = req.body.id;
  if (id == undefined || id == '') {
    res.redirect('/cardapio/itemcardapio');
  } else {
    Dado.destroy({
      where: { id: id }
    }).then(() => {
      res.redirect('/cardapio/itemcardapio');
    }).catch(err => {
      console.log(err);
    });
  }
}
module.exports = { formCardapio, saveItemCardapio, salvaAltCardapio, formEdicaoCardapio, listaItemCardapio, deleteCardapio };