const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
    minlength: 3
  },
  description: {
    type: String,
  },
  startDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['PENDING', 'DONE'],
    required: true,
    default: 'PENDING'
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Task', taskSchema)