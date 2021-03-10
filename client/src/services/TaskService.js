import axios from 'axios'
import env from 'react-dotenv'

class TaskService {

  createTask(task) {
    return axios.post(`${env.API_URL}/tasks`, task)
  }

  getAllTasks() {
    return axios.get(`${env.API_URL}/tasks`)
  }
}


export default new TaskService()