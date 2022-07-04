import { Response } from 'express';

const unKnownError = (err: any, res: Response) => {
  res.status(500).json({ error: { message: 'Something went wrong.' } });
};

export default unKnownError;
