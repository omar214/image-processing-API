import supertest, { Response } from 'supertest';
import app from '../index';

const request = supertest(app);

describe('test sending bad requests', () => {
  it('sending bad request get status code 400', async () => {
    const response: Response = await request.get(
      '/api/image?&width=100&height=100'
    );

    expect(response.status).toBe(400);
  });

  it('sending image that is not found get code 404', async () => {
    const response: Response = await request.get(
      '/api/image?imageName=wrongname&width=100&height=100'
    );

    expect(response.status).toBe(404);
  });

  it('sending width & height as strings get code 400', async () => {
    const response: Response = await request.get(
      '/api/image?&width=100&height=100'
    );
    expect(response.status).toBe(400);
  });

  it('sending -ve dimensions get code 400', async () => {
    const response: Response = await request.get(
      '/api/image?&width=100&height=100'
    );

    expect(response.status).toBe(400);
  });
});

describe('sending good requests', () => {
  it('test resize image get code 200', async () => {
    const response: Response = await request.get(
      '/api/image?imageName=encenadaport&width=100&height=100'
    );

    expect(response.status).toBe(200);
  });

  it('test cached image get code 200', async () => {
    const response: Response = await request.get(
      '/api/image?imageName=encenadaport&width=100&height=100'
    );

    expect(response.status).toBe(200);
  });
});

describe('un used routes', () => {
  it('should return 404 when make request to unavailable route', async () => {
    const response: Response = await request.get(
      '/api/video'
    );

    expect(response.status).toBe(404);
  });

});