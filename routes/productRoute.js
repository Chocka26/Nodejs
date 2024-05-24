const express = require("express")
const router = express.Router()

const productController = require("../Controllers/ProductController")

router.post("/product/insert",productController.insert);


module.exports = router