import { databaseConnection } from './config/databse.js'
import importData from './DataImport.js'
import productRoutes from './routes/Product.js'
import authRoutes from './routes/Auth.js'
import { errorHandler, notFound } from './middleware/Error.js'

import express from 'express'
import dotenv from 'dotenv'
import userRoutes from './routes/User.js'

dotenv.config()

databaseConnection()
const app = express()
app.use(express.json())

app.use('/api/import', importData)
app.use('/api', productRoutes)
app.use('/api', authRoutes)
app.use('/api', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running: ${PORT}`))
