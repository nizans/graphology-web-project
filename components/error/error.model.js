class ErrorHandle extends Error {
  constructor(statusCode, message, originalError, clientMessage = '', isOperational = false) {
    super();
    this.originalError = originalError;
    this.statusCode = statusCode;
    this.message = message;
    this.clientMessage = clientMessage;
    this.isOperational = isOperational;
  }
}

module.exports = ErrorHandle;
