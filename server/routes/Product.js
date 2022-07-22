import express from 'express'
import asyncHandler from 'express-async-handler'
import { Product } from '../models/Product.js'

const productRoutes = express.Router()

productRoutes.get(
  '/get_products',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
  })
)

productRoutes.get(
  '/get_products/:id',
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) res.json(product)
    else {
      res.status(400).json({ msg: 'Product not found' })
    }
  })
)

export default productRoutes
