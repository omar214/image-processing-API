import path from 'path';
import resize from '../utils/resizeImage';

describe('test resize image', () => {
  it('should return right path after resize', async () => {
    const imageName = 'encenadaport';

    const res = await resize(imageName, 100, 100);
    const newPath = path.join(
      __dirname,
      '..',
      '..',
      'public',
      'cached',
      `${imageName}_100_100.jpg`
    );
    expect(res).toBe(newPath);
  });

  it('should throw error when sending invalid parameter', async () => {
    await expectAsync(resize('', 100, 100)).toBeRejectedWith(
      new Error('Error while resizing image')
    );
  });

  it('should throw error when sending -ve dimenstion', async () => {
    await expectAsync(resize('fjord', -100, 100)).toBeRejectedWith(
      new Error('Error while resizing image')
    );
  });
});
