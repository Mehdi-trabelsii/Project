import httpStatus from 'http-status';

export  default (Status) = 'OK' | 'ZERO_RESULTS' | 'INVALID_REQUEST' | 'REQUEST_DENIED' | 'UNKNOWN_ERROR';



/**
 * @extends Error
 */
class ExtendableError extends Error {
  constructor({ errorCode, status, errors, statusMessage }) {
    super(status);
    this.name = this.constructor.name;
    this.errorCode = errorCode;
    this.errors = errors;
    this.status = status;
    this.statusMessage = statusMessage;
  }

  isPublic = false;
  status = null;
  statusMessage;
  errors = [key]= null;
  errorCode = null;
}


class APIError extends ExtendableError {
  constructor({ errorCode, status, errors, statusMessage }) {
    super({
      errorCode,
      status,
      errors,
      statusMessage,
    });

    Object.setPrototypeOf(this, APIError.prototype);
    if (status) this.status = status;
  }
  status = 'INTERNAL_SERVER_ERROR';
}

export default APIError;
