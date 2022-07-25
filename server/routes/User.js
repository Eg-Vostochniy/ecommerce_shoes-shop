import express from 'express'
import { userCtrl } from '../controllers/User.js'
import { auth } from '../middleware/auth.js'

const userRoutes = express.Router()

userRoutes.get('/profile', auth, userCtrl.getProfile)

export default userRoutes
