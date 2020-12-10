import mongoose from 'mongoose';
import { uuid } from '../utils/uuid.js'

const { Schema } = mongoose;
const userSchema = new Schema({
  uuid:{
    type: Buffer,
    unique: true,
    default: Buffer.from(uuid(), 'hex')
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
})

export default mongoose.model('User', userSchema)
