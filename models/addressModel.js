import mongoose from 'mongoose'

const addressSchema = mongoose.Schema(
  {
    client: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Client',
    },
    street: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    sector: {
      type: String,
      required: true,
    },
  },
  {
    timestamp: true,
  }
)

const Address = mongoose.model('Address', addressSchema)

export default Address
