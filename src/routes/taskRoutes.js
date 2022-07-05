const taskRouter = require('express').Router()
const { createTask, getTasks } = require('../controller/taskController')

taskRouter.post('/', createTask)
taskRouter.get('/', getTasks)

module.exports = taskRouter