import express from 'express'
import asyncHandler from 'express-async-handler'

import { products } from './data/Products.js'
import { users } from './data/Users.js'
import { Product } from './models/Product.js'
import { User } from './models/User.js'

const importData = express.Router()

importData.post(
  '/user',
  asyncHandler(async (req, res) => {
    await User.deleteMany({})
    const importUser = await User.insertMany(users)

    res.send({ importUser })
  })
)

importData.post(
  '/products',
  asyncHandler(async (req, res) => {
    await Product.deleteMany({})
    const importProducts = await Product.insertMany(products)

    res.send({ importProducts })
  })
)

export default importData
