import responseError from '../types/Error';

const createError = (status: number, message: string) => {
  const err: responseError = new Error();
  err.status = status;
  err.message = message;
  return err;
};

export default createError;
