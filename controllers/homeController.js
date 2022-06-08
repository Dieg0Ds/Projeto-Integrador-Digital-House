const homeController = {
    index: (req, res) => {
        res.render("home")
    },
    create: (req, res) => {
        res.send("Create")
    },
    show: (req, res) => {
        res.send("show")
    },
    update: (req, res) => {
        res.send("update")
    },
    destroy: (req, res) => {
        res.send("destroy")
    }
}

module.exports = homeController;