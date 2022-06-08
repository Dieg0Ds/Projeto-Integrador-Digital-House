const homeController = {
    index: (req, res) => {
        res.render("home/")
    },
    cadastro: (req, res) => {
        res.render("home/cadastro")
    }
}

module.exports = homeController;