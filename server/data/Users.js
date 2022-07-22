import bcrypt from 'bcryptjs'

const hashPassword = (password, salt) => {
  return bcrypt.hashSync(password, salt)
}

export const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: hashPassword('123456', 10),
    isAdmin: true,
  },
  {
    name: 'User',
    email: 'user@example.com',
    password: hashPassword('123456', 10),
  },
]
