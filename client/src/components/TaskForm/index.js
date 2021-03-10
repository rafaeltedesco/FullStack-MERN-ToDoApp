import React, {Component} from 'react'
import './taskForm.css'
import getDate from './../../utils/formatDate'
import TaskService from './../../services/TaskService'
import {Link} from 'react-router-dom'

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: {
        task: '',
        description: '',
        startDate: getDate(),
        endDate: '2021-03-12',
        status: 'PENDING'
      },
      responseState: '',
      responseError: '',
      btnState: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  registerTask(task) {
    TaskService.createTask(task)
    .then(res=> this.setState({responseState:res}), error => this.setState({responseError: error}))
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

  addTask(ev) {
    ev.preventDefault()
    let state = {...this.state}
    if (state.task.task.length >= 4) {
      this.registerTask(state.task)  
    }
    else {
      alert('Cannot add task')
    }
    state.task.task = ''
    this.setState(state)
  }

  render() {
    return (
      <section>
        <div>
          <form className="taskForm">
            <div className="tasksInfo">
              <p>Task Name</p>
              <input type="text" name="task" value={this.state.task.task} placeholder="Type your task name here..."
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
            <button onClick={this.addTask} disabled={this.state.btnState} >Add Task</button>
            <Link to="/tasks">Get All Tasks</Link>
          </form>
        </div>
      </section>
    )
  }
}

export default TaskForm