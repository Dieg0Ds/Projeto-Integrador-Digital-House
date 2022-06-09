const express = require('express');
const app = express();
const homeRouter = require("./routes/home");
const minhaContaRouter = require("./routes/minhaConta");
const politicaRouter = require("./routes/politica");
const trabalheConoscoRouter = require("./routes/trabalheConosco");
// const sobreRouter = require("./routes/sobre");
// const cadastroRouter = require("./routes/home");


app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));

app.use(homeRouter);
app.use(minhaContaRouter);
app.use(politicaRouter);
app.use(trabalheConoscoRouter);
// app.use(sobreRouter);
// app.use(cadastroRouter);


app.listen(3000, () => console.log("loading..."));