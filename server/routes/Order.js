import express from 'express'
import { orderCtrl } from '../controllers/Order.js'
import { auth } from '../middleware/auth.js'

const orderRoutes = express.Router()

orderRoutes.post('/create_order', auth, orderCtrl.createOrder)
orderRoutes.get('/get_order/:id', auth, orderCtrl.getOrder)

export default orderRoutes
