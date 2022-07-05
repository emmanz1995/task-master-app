const Task = require('../models/taskModel')

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({})
    res.status(200).json(tasks)
  } catch(err) {
    return res.status(404).send(err)
  }
}

const createTask = async (req, res) => {
  try {
    const body = req.body
    const addTask = new Task({ ...body, createdAt: new Date() })
    await addTask.save()
    res.status(201).json(addTask)
  } catch(err) {
    console.log(err)
    return res.status(404).send(err)
  }
}

module.exports = { getTasks, createTask }