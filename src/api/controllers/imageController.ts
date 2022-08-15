import { NextFunction, Request, Response } from 'express';
import resize from '../../utils/resizeImage';

const resizeContoller = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { imageName, width, height } = req.query;

  try {
    const newImagePath: string = await resize(
      imageName as string,
      Number(width),
      Number(height)
    );

    // send image
    res.status(200).sendFile(newImagePath);
  } catch (error) {
    console.log(error);
    console.log('error inside route');

    res.send('error');
  }

  // send image
};

export default resizeContoller;
