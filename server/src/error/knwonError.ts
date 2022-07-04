import { Response } from 'express';

const knwonError = (err: any, res: Response) => {
  const { statusCode, message } = err;
  res.status(statusCode).json({ error: { message, statusCode } });
};
export default knwonError;
