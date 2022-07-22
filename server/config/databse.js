import mongoose from 'mongoose'

export const databaseConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    console.log('Mongo connected')
  } catch (error) {
    console.log(`Error: ${error.message}`)
    process.exit(1)
  }
}
