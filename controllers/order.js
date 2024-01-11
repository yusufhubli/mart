import Order from '../models/Order.js'
import { OrderItem } from '../models/Order.js'

export const getOrders = async(req,res)=>{
    try {
        const order = await Order.find().populate("userId")
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getOrderItems = async(req,res)=>{
    try {
        const {id} = req.params
        const order = await OrderItem.find({orderId:id})
        res.status(200).json(order)
    } catch (error) {
        res.status(400).json(error)
    }
}