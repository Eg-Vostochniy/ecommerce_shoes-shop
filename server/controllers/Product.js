import asyncHandler from 'express-async-handler'
import { Product } from '../models/Product.js'

export const productCtrl = {
  getProducts: asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
  }),
  getProductById: asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) res.json(product)
    else {
      res.status(400).json({ msg: 'Product not found' })
    }
  }),
}
