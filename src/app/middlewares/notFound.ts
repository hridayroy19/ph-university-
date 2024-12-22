/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import httpStatus from 'http-status';

import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(httpStatus.OK).json({
    success: false,
    message: 'API Not Found !!',
    error: '',
  });
};

export default notFound;
