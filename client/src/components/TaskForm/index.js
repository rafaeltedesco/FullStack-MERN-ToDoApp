import React, {Component} from 'react'
import './taskForm.css'
import getDate from './../../utils/formatDate'
import TaskService from './../../services/TaskService'


class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: {
        taskName: '',
        description: '',
        startDate: getDate(),
        endDate: '2021-03-12',
        status: 'pending'
      },
      btnState: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async registerTask(task) {
    console.log(task)
    TaskService.createTask(task)
    .then(res=> {
      console.log(res)
    }, err => {
      console.log(err.message)
    })
    
  }

  canActivateBtn() {
    let state = this.state
    let filtered = Object.keys(state.task).filter(field=> {
      return state.task[field].toString().length >= 4
    })

    if (filtered.length === Object.keys(state.task).length) {
      state.btnState = false
    }
    else {
      state.btnState = true
    }
    this.setState(state) 
  }

  handleChange(ev) {
    let state = this.state
    let data = ev.target.value
    let field = ev.target.name
    state.task[field] = data
    this.setState(state)
    this.canActivateBtn()
  }

  handleSubmit(ev) {
    ev.preventDefault()
    let state = this.state
    if (state.task.taskName.length >= 4) {
      this.registerTask(state.task)  
    }
    else {
      alert('Cannot add task')
    }
    state.task.taskName = ''
    this.setState(state)
  }

  render() {
    return (
      <section>
        <form className="taskForm" onSubmit={this.handleSubmit}>
          <div className="tasksInfo">
            <p>Task Name</p>
            <input type="text" name="taskName" value={this.state.task.taskName} placeholder="Type your task name here..."
            onChange={this.handleChange} />
            <p>Description</p>
            <textarea name="description" value={this.state.task.description} placeholder="Type your task description..."
            onChange={this.handleChange} />
          </div>
          <div className="datesBox">
            <p>Start Date:</p>
            <input type="date" value={this.state.task.startDate} name="startDate" onChange={this.handleChange}/>
            <p>End Date:</p>
            <input type="date" value={this.state.task.endDate} name="endDate" onChange={this.handleChange}/>
          </div>
          <button disabled={this.state.btnState} >Add Task</button>
        </form>
      </section>
    )
  }
}

export default TaskForm