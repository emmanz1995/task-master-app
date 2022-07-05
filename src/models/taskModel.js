const mongoose = require('mongoose')
const { Schema } = mongoose

const taskSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  priority: {
    type: Boolean,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  },
  reminder: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  }
})

const Task = mongoose.model('task', taskSchema)

module.exports = Task