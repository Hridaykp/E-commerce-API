//if any page or api not found
const NotFount = (req, res) =>{
    res.status(404).send("This page is not available")
}

module.exports = NotFount;