import express from 'express'
import { getOrderItems, getOrders } from '../controllers/order.js'
const router = express.Router()

router.get('/',getOrders)

router.get(`/:id`,getOrderItems)

export default router