import express from 'express';
import dotenv from 'dotenv';
import a from './api/index.routes';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('Express + TypeScript Server');
});

app.listen(port, () => {
	console.log(`[server]: Server is running at https://localhost:${port}`);
});

console.log('Hello World');
console.log(a());
console.log('Hello World');
