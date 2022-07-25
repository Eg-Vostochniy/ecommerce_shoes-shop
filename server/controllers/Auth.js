import asyncHandler from 'express-async-handler'
import { generateToken } from '../config/generateToken.js'
import { User } from '../models/User.js'

export const authCtrl = {
  login: asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id)
      res.json({
        msg: 'Login success!',
        user: {
          ...user._doc,
          token,
          password: '',
        },
      })
    } else {
      res.status(401).json({ msg: 'Invalid email or password' })
    }
  }),
  register: asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const user = await User.findOne({ email })

    if (user) {
      res.status(400).json({ msg: 'User already exists' })
    }
    const new_user = await User.create({
      name,
      email,
      password,
    })

    if (new_user) {
      res.status(200).json({
        msg: 'Register success',
        ...new_user._doc,
        token: generateToken(new_user._id),
        password: '',
      })
    } else {
      res.status(400).json({ msg: 'Invalid user data' })
    }
  }),
}
