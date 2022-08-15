import { NextFunction, Request, Response } from 'express';
import { existsSync } from 'fs';
import path from 'path';
import createError from '../utils/error';

const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { imageName, width, height } = req.query;
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!imageName || !width || !height)
    return next(createError(400, 'missing parameters in query'));

  const imagePath = path.join(
    __dirname,
    '..',
    '..',
    'public',
    'images',
    `${imageName as string}.jpg`
  );
  if (!existsSync(imagePath)) return next(createError(404, 'Image not found'));

  // validate width and height
  if (!Number.isInteger(Number(width)) || !Number.isInteger(Number(height)))
    return next(createError(400, 'width and height must be integers'));

  if (Number(width) < 1 || Number(height) < 1)
    return next(createError(400, 'width and height must be greater than 0'));

  next();
};

export default validateRequest;
