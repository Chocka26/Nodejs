const express = require("express")
const router = express.Router()

const PostController = require("../Controllers/PostController")

router.post("/post/insert",PostController.insert);
router.post("/post/insertwithimg",PostController.insertwithImages)
router.get("/post/findall",PostController.list)
router.post("/post/addcomment",PostController.addcomment)
router.post("/post/tag",PostController.tag)

module.exports = router