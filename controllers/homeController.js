const homeController = {
    index: (req, res) => {
        res.render("home/")
    },
    cadastro: (req, res) => {
        res.render("home/cadastro")
    },
    sobre: (req, res) => {
        res.render("home/sobre")
},
login: (req, res) => {
    res.render("home/login")
}
}

module.exports = homeController;