const express = require('express');
const app = express();
const homeRouter = require("./routes/home");



app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));

app.use(homeRouter);




app.listen(3000, () => console.log("loading..."));