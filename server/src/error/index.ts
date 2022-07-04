import { Response } from 'express';
import CustomizeError from './customizeError';
import knwonError from './knwonError';
import unKnownError from './unKnownError';

const customErrorHandler = (err: any, res: Response) => {
  // eslint-disable-next-line no-unused-expressions
  err instanceof CustomizeError ? knwonError(err, res) : unKnownError(err, res);
};

export default customErrorHandler;
