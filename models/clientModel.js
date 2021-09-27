import mongoose from 'mongoose'

const clientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
)

const Client = mongoose.model('Client', clientSchema)

export default Client
