import { Router } from 'express';
const router = Router();

// import controllers

router.get('/image', async (req, res, next) => {
  const { image, width, height } = req.query;
  console.log(image, width, height);

  res.send('images');
});

export default router;
