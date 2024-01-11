import express from "express"
import path from "path"

const router = express.Router()
router.get("/", (req, res) => {
    res.sendFile(path.resolve("./views/index.html"))
})


router.get("/home", (req, res) => {
    res.sendFile(path.resolve("./views/home.html"))
   // res.sendFile(path.resolve("./css/home.css"))
   //res.sendFile(path.resolve("./views/home.html"))
})


router.get("/item", (req, res) => {
    res.sendFile(path.resolve("./views/items.html"))
})


router.get("/user", (req, res) => {
    res.sendFile(path.resolve("./views/user.html"))
})

router.get("/order", (req, res) => {
    res.sendFile(path.resolve("./views/order.html"))
})

router.get("/add", (req, res) => {
    res.sendFile(path.resolve("./views/add.html"))
})

export default router