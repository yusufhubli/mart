import express from "express"
import { getUsers } from "../controllers/user.js"

const router = express.Router()
router.post("/",(req,res)=>{
})

router.get("/",getUsers)

export default router