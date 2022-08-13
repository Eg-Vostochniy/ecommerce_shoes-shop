import asyncHandler from 'express-async-handler'
import { Order } from '../models/Order.js'

export const orderCtrl = {
  createOrder: asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0) {
      res.status(400).json({ msg: 'No order items' })
    } else {
      const order = new Order({
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      })
      const createOrder = await order.save()
      res.status(200).json(createOrder)
    }
  }),
  getOrder: asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
    )

    if (order) {
      res.status(200).json(order)
    } else {
      res.status(400).json({ msg: 'Order not found' })
    }
  }),
  getOrder: asyncHandler(async (req, res) => {
    const { id, status, update_time, email_address } = req.body
    const order = await Order.findById(req.params.id)

    if (order) {
      order.isPaid = true
      order.paidAt = Date.now
      order.paymentResult = {
        id,
        status,
        update_time,
        email_address,
      }

      const updatedOrder = await order.save()
      res, json(updatedOrder)
    } else {
      res.status(400).json({ msg: 'Order not found' })
    }
  }),
}
