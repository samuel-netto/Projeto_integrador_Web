const Pedido = require("../models/Pedido");
  
function savePedidos(req, res) {
    const { Telefone, Endereco1, Endereco2, Bairro, Referencia, Cep, Pedido } = req.body;
    
        Pedido.create({
            Telefone,
            Endereco1,
            Endereco2, 
            Bairro, 
            Referencia,
            Cep, 
            Pedido
        }).then(() => {
            res.redirect('/contatos');
        }).catch (err => {
            console.log(err);
        });
}

async function listaPedidos(req, res) {
    const msgError = await req.consumeFlash('error');
    const msgSuccess = await req.consumeFlash('success');
    Pedido.findAll().then(pedidos => {
        res.render('admin/itemPedido', { pedidos, msgSuccess, msgError });
    });
}

function deletePedidos(req, res) {
    const id = req.body.id;
    if (id == undefined || id == '') {
      res.redirect('/contatos/itemPedidos');
    } else {
      Pedido.destroy({
        where: { id: id }
      }).then(() => {
        res.redirect('/contatos/itemPedidos');
      }).catch(err => {
        console.log(err);
      });
    }
  }
module.exports = {savePedidos, listaPedidos, deletePedidos};