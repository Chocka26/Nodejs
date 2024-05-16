const express = require("express")
const router = express.Router()

const identifierCustomerController = require("../Controllers/IdentifierCustomerController")

router.post("/customer/insert",identifierCustomerController.createCustomer);
router.post("/identifier/insert",identifierCustomerController.createIdentifierwithCustomer);
router.get("/customeridentifier/get",identifierCustomerController.showAllIdentifiers)

module.exports = router