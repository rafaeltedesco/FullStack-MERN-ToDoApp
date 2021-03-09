const {STATUS} = require('./response.utils')

class AppError extends Error {
  constructor(message, statusCode) {
    super(message)
    this.statusCode = statusCode || STATUS.INTERNAL_SERVER_ERROR
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error'
    this.isOperational = true
  }
}

module.exports = AppError