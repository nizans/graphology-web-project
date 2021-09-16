class ErrorHandle extends Error {
  constructor(statusCode, message, originalError, clientMessage = '') {
    super();
    this.originalError = originalError;
    this.statusCode = statusCode;
    this.message = message;
    this.clientMessage = clientMessage;
  }
}

module.exports = ErrorHandle;
