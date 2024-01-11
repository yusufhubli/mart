import Admin from "../models/Admin.js";

export const adminLogin = async(req,res)=>{
    try {
        const body = req.body
        console.log(body)
        res.status(200).json(body)
       } catch (error) {
        res.status(400).json(error)
       }
}

