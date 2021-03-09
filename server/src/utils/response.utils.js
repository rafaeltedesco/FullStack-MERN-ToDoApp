class ResponseJSON {
  constructor(message, data={}, status='success') {
    this._message = message,
    this._status = status,
    this._data = data
  }

  get response() {
    return Object.keys(this._data).length >= 1 ? {status: this._status, message: this._message, data: this._data} :
    {status: this._status, message: this._message}
  }
}

exports.STATUS = {
  OK: 200,
  NOT_FOUND: 404,
  BAD_REQUEST: 400,
  INTERNAL_SERVER_ERROR: 500,
}

exports.ResponseJSON = ResponseJSON