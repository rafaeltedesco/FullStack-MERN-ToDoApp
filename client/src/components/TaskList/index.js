import React, {Component} from 'react'
import TaskService from './../../services/TaskService'
import './taskList.css'
import {
  Link
} from 'react-router-dom'
import calcDiffDate from './../../utils/calcDiffDate'

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
      <div className="taskContainer">
        <div className="tasksCards">
          {Object.keys(this.state.tasks).map(task=> {
            return (
              <div className="taskBox">
                <div>
                  <h3 className="cardTitle">{this.state.tasks[task].task}</h3>
                </div>
                <div>
                  <p>
                    Start Date: {new Date(this.state.tasks[task].startDate).toLocaleDateString('pt-br')}<br />
                    End Date: <span className={calcDiffDate(this.state.tasks[task].endDate, Date.now()) < 0 && 'late'}>{new Date(this.state.tasks[task].endDate).toLocaleDateString('pt-br')}</span><br />
                    Status: <span className={this.state.tasks[task].status === 'PENDING' ? 'pending' : 'done'}>{this.state.tasks[task].status}</span>
                  </p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="back">
          <div>
          <Link className="btnBack" to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskList