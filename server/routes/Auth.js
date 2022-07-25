import express from 'express'
import { authCtrl } from '../controllers/Auth.js'
const authRoutes = express.Router()

authRoutes.post('/login', authCtrl.login)
authRoutes.post('/register', authCtrl.register)

export default authRoutes
