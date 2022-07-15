const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    nickName: {
      type: String,
      required: [true, 'Please add a name'],
    },
    firstName: {
      type: String,
      required: [true, 'Please add a name'],
    },
    lastName: {
      type: String,
      required: [true, 'Please add a name'],
    },
    email: {
      type: String,
      required: [true, 'Please add an email'],
      unique: true,
    },
    birthday: {
      type: String,
      required: [true, 'Please add your birthday'],
    },
    gender: {
      type: String,
      required: [true, 'Please add your birthday'],
    },
    phone: {
      type: String,
      required: [true, 'Please add your birthday'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
