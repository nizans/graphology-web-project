class ErrorHandle extends Error {
  constructor(statusCode, message, originalError) {
    super();
    this.originalError = originalError;
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = ErrorHandle;
