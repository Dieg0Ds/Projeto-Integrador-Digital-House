const express = require('express');
const app = express();
const homeRouter = require("./routes/home");
const cadastroRouter = require("./routes/cadastro")

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(homeRouter);
// app.use(cadastroRouter)

app.listen(3000, () => console.log("loading..."));