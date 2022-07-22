import { databaseConnection } from './config/databse.js'
import importData from './DataImport.js'
import productRoutes from './routes/Product.js'
import { errorHandler, notFound } from './middleware/Error.js'

import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

databaseConnection()
const app = express()

app.use('/api/import', importData)
app.use('/api', productRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running: ${PORT}`))
