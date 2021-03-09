const {STATUS, ResponseJSON} = require('./../utils/response.utils')
const AppError = require("./../utils/appError")

exports.errorHandler = async(err, req, res, next)=> {
  err.statusCode = err.statusCode || STATUS.INTERNAL_SERVER_ERROR
  err.status = err.status || 'error'
  return res.status(err.statusCode).json(
    new ResponseJSON(message = err.message, data= {}, status = err.status).response
  )
}

exports.throwError = async(req, res, next) => {
  next(new AppError(`Url ${req.originalUrl} not found`, STATUS.NOT_FOUND))
}