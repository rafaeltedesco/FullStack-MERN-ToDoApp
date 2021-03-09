const express = require('express')

const {getAllTasks, createNewTask, deleteTask, updateTask} = require('./../controllers/tasks.controller')

const router = express.Router()

router.route('/')
.get(getAllTasks)
.post(createNewTask)

router.route('/:id')
.delete(deleteTask)
.put(updateTask)


module.exports = router