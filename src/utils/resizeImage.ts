import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import sharp from 'sharp';

const resize = async (
  imageName: string,
  width: number,
  height: number
): Promise<string> => {
  try {
    const newImageName = `${imageName}_${width}_${height}.jpg`;
    const currentImagePath = path.join(
      __dirname,
      '..',
      '..',
      'public',
      'images',
      `${imageName}.jpg`
    );
    const newImagePath = path.join(
      __dirname,
      '..',
      '..',
      'public',
      'cached',
      newImageName
    );
    // handle cached images
    if (existsSync(newImagePath)) return newImagePath;

    // create the cached directory if it doesn't exist
    if (!existsSync(path.dirname(newImagePath)))
      mkdirSync(path.dirname(newImagePath));

    await sharp(currentImagePath).resize(width, height).toFile(newImagePath);
    return newImagePath;
  } catch (error) {
    // console.log('error inside resize');
    // console.log(error);
    throw new Error('Error while resizing image');
    // return error;
  }
};

export default resize;
