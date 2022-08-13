import express from 'express'
import { userCtrl } from '../controllers/User.js'
import { auth } from '../middleware/auth.js'

const userRoutes = express.Router()

userRoutes.put('/profile', auth, userCtrl.updateProfile)

export default userRoutes
