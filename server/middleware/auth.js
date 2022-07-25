import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { User } from '../models/User.js'

export const auth = asyncHandler(async (req, res, next) => {
  let token

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ', [1])

      const decoded = jwt.verify(token, process.env.JWT_TOKEN)

      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {
      res.status(401).json('Authorise please')
      throw new Error('token failed')
    }
  }
  if (!token) {
    res.status(401).json({ msg: 'Authorize please' })
    throw new Error('no token')
  }
})
