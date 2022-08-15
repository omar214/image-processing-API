import { existsSync } from 'fs';
import path from 'path';
import sharp from 'sharp';

const resize = async (imageName: string, width: number, height: number) => {
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

    await sharp(currentImagePath).resize(width, height).toFile(newImagePath);
    return newImagePath;
  } catch (error) {
    console.log(error);
    console.log('error inside resize');
    throw error;
    // return error;
  }
};

export default resize;
