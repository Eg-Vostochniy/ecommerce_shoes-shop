import express from 'express'
import { productCtrl } from '../controllers/Product.js'

const productRoutes = express.Router()

productRoutes.get('/get_products', productCtrl.getProducts)

productRoutes.get('/get_products/:id', productCtrl.getProductById)

export default productRoutes
