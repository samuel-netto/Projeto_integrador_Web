const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const { flash } = require('express-flash-message');

const Dado = require('./models/Dado');
const adminRoutes = require('./routes/AdminRoutes');
const cardapioRoutes = require('./routes/CardapioRoutes');
const PedidoRoutes = require('./routes/PedidoRoutes');

const app = express();

//View engine
app.set("view engine", "ejs");

app.use(express.static("public"));

//Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.port|| 3000;

//sessions
app.use(
  session({
    secret: "Qualquer coisa",
    saveUninitialized: true,
    cookie: { maxAge: 30000 },
  })
);

// apply express-flash-message middleware
app.use(flash({ sessionKeyName: 'flashMessage' }));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/cardapio', (req, res) => {

  Dado.findAndCountAll().then((total) => {
    let pages = total.count; //total de registros

    if (pages <= 3) {
      pages = 0;
    }
    Dado.findAll({
      limit: 3,
      order: [["id", "ASC"]],
    }).then((dados) => {
      res.render("cardapio", { dados, current: 1, pages });
    });
  });
});

app.get('/pagina/:page', (req, res) => {
  const perPage = 3;
  var current = req.params.page;

  Dado.findAll({
    limit: perPage,
    offset: perPage * current - perPage,
    order: [["id", "ASC"]],
  }).then((dados) => {
    Dado.findAndCountAll().then((total) => {
      const count = total.count;
      const pages = count / perPage;
      res.render("pagina", {
        dados,
        current,
        pages,
      });
    });
  });

});

app.get('/contatos', (req, res) => {
  res.render('contatos')
});

app.get('/sobre', (req, res) => {
  res.render('sobre')
});

app.use('/admin', adminRoutes);
app.use('/cardapio', cardapioRoutes);
app.use('/contatos', PedidoRoutes);


app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});

app.get('/')