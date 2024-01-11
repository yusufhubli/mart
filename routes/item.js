import express from "express"
import { deleteItem, getSingleItem, getItems,insertItem,updateItem,addCategory,getCategory } from "../controllers/item.js"

const router = express.Router()

router.post("/",insertItem)

router.put("/item/:id",updateItem)

router.post("/category",addCategory)

router.get("/category",getCategory)

router.delete("/:id",deleteItem)

router.get("/",getItems)

router.get("/:id",getSingleItem)

export default router