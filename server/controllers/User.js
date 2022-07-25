import asyncHandler from 'express-async-handler'

export const userCtrl = {
  getProfile: asyncHandler(async (req, res) => {
    const user = req.user

    if (user) {
      console.log(user)
    } else {
      res.status(401).json({ msg: 'User not found' })
    }
  }),
}
