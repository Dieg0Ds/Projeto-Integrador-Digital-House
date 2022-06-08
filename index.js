const express = require('express');
const app = express();
const homeRouter = require("./routes/home");
const cadastroRouter = require("./routes/cadastro");
const minhaContaRouter = require("./routes/minhaConta");
const sobreRouter = require("./routes/sobre");
const politicaRouter = require("./routes/politica");
const trabalheConoscoRouter = require("./routes/trabalheConosco");


app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(homeRouter);
<<<<<<< HEAD
app.use(cadastroRouter);
app.use(minhaContaRouter);
app.use(sobreRouter);
app.use(politicaRouter);
app.use(trabalheConoscoRouter);
=======
// app.use(cadastroRouter)
>>>>>>> 8682cb8c45eae0aa89c3cb735bfa6fc1ac098959

app.listen(3000, () => console.log("loading..."));