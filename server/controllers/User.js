import asyncHandler from 'express-async-handler'
import { User } from '../models/User.js'

export const userCtrl = {
  updateProfile: asyncHandler(async (req, res) => {
    const { user } = req.body
    const updatedProfile = await User.findByIdAndUpdate(user._id, {
      name: user.name,
      email: user.email,
    }).populate('-password')
    res.json({ msg: 'Updated succes!', user: updatedProfile })
  }),
}
