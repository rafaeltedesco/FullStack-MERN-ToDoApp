import React, {Component} from 'react'

class TaskForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: {
        taskName: '',
        description: '',
        startDate: '2021-03-10',
        endDate: '2021-03-12',
        status: 'pending'
      },
      btnState: true,
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  registerTask(task) { 
    
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
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="taskName" value={this.state.task.taskName} placeholder="Type your task name here..."
          onChange={this.handleChange} />
          <textarea name="description" value={this.state.task.description} placeholder="Type your task description..."
          onChange={this.handleChange} />
          <input type="date" value={this.state.task.startDate} name="startDate" onChange={this.handleChange}/>
          <button disabled={this.state.btnState} >Add Task</button>
        </form>
        {this.state.task.taskName}
        {this.state.task.description}
        {this.state.task.startDate}
        {this.state.task.endDate}
        {this.state.task.status}
      </section>
    )
  }
}

export default TaskForm