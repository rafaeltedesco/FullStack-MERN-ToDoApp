import React, {Component} from 'react'
import TaskService from './../../services/TaskService'

class TaskList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: ''
    }
    this.getTasks = this.getTasks.bind(this)
  }

  getTasks() {
    let state = this.state 
    TaskService.getAllTasks()
    .then(res=> {
      state.tasks = JSON.parse(JSON.stringify(res.data.tasks))
      console.log(state.tasks)
      this.setState(state)
    }, error=> console.log(error))
  }

  componentDidMount() {
    this.getTasks()
  }

  render() { 
    
    return (
      <div>
        {Object.keys(this.state.tasks).map(task=> {
          return (
            <div>
              <div>
                <h4>{this.state.tasks[task].task}</h4>
              </div>
              <div>
                <p>
                  Start Date: {new Date(this.state.tasks[task].startDate).toLocaleDateString('en-US')}<br />
                  End Date: {new Date(this.state.tasks[task].endDate).toLocaleDateString('en-US')}<br />
                  Status: {this.state.tasks[task].status}
                </p>
              </div>

            </div>
          )
        })}
         
      </div>
    )
  }
}

export default TaskList