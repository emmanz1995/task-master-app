import axios from 'axios'

class TaskService {
  async createTasks(formData) {
    const response = await axios.post('/api/tasks', formData, {
      headers: { 'content-type': 'application/json' }
    })
    return response.data
  }

  async fetchAllTasks() {
    const response = await axios.get('/api/tasks')
    return response.data
  }
}

export default new TaskService