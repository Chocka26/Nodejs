const express = require("express")
const router = express.Router()

const FoodController = require("../Controllers/FoodController")

router.post("/food/insert",FoodController.insert)
router.get("/food/list",FoodController.list)
router.get("/food/:id",FoodController.find)
router.delete("/food/:id",FoodController.delete)
router.post("/food/:id",FoodController.update)

module.exports = router


