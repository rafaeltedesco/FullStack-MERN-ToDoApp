const {STATUS, ResponseJSON} = require('./../utils/response.utils')
const {catchAsync} = require('./../utils/catchAsync')
const Task = require('./../models/task.model') 
const AppError = require('./../utils/appError')

exports.getAllTasks = catchAsync(async (req, res, next) => {
  const tasks = await Task.find()
  if (!tasks.length) {
    return next(new AppError('Data not found', STATUS.NOT_FOUND))
  }
  
  return res.status(STATUS.OK).json(
    new ResponseJSON(message = `${tasks.length} task(s) found!`, data = tasks).response
    )
})

exports.createNewTask = catchAsync(async (req, res, next) => {
  const task = await Task.create(req.body)
  if (!task) return next(new AppError('Cannot create task', STATUS.BAD_REQUEST))

  return res.status(STATUS.OK).json(
    new ResponseJSON(message = 'New Task created!', data = task).response
    )
})

exports.deleteTask = catchAsync(async(req, res, next)=> {
  const {id} = req.params
  const {deletedCount} = await Task.deleteOne({_id:id})
  if (!deletedCount) return next(new AppError(`Something went wrong!`, STATUS.BAD_REQUEST))

  return res.status(STATUS.OK).json(
    new ResponseJSON(message = `Task id: ${id} deleted`).response
  )
}) 

exports.updateTask = catchAsync(async(req, res, next)=> {
  const {id} = req.params
  const task = await Task.updateOne({_id: id}, req.body)
  console.log(task)

  
  return res.status(STATUS.OK).json(
    new ResponseJSON(message = `Task id: ${id} updated`).response
  )

})