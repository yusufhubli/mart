import User from '../models/User.js'

export const getUsers = async(req,res)=>{
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json(error)
    }
}