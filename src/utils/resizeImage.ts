import sharp from 'sharp';

const resize = async (imageName: string, width: number, height: number) => {
  try {
    const currentImagePath = `${__dirname}/../images/${imageName}.jpg`;
    const newImageName = `${imageName}_${width}_${height}.jpg`;
    const newImagePath = `${__dirname}/../images/cached/${newImageName}`;

    const result = await sharp(currentImagePath)
      .resize(width, height)
      .toFile(`${newImagePath}`);
    return newImagePath;
  } catch (error) {
    console.log(error);
    console.log('error inside resize');
    throw error;
    // return error;
  }
};

export default resize;
