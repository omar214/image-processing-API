import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// import routes
import allRoutes from './api/index.routes';
import responseError from './types/Error';

// Middlewares
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.urlencoded({ extended: true })); // send nested objects
app.use(express.static('public')); // serve static files

// listen to port
const PORT = process.env.PORT || 3000;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);

// Routes which should handle requests
app.use('/api', allRoutes);

// handle errors
app.use(
  (err: responseError, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong!';
    return res.status(status).json({
      success: false,
      status,
      message,
    });
  }
);

// handle not found routes
app.use('*', (req, res) => {
  res.status(404);
  res.json({
    error: { message: 'Not found' },
  });
});
export default app;
