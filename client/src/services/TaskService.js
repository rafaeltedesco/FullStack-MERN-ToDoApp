import axios from 'axios'

class TaskService {

  createTask(task) {

    return axios.post(process.env.API_URL + 'tasks', task)


  }
}


export default new TaskService()