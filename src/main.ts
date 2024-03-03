import express from 'express';
import appRouter from './application/router/index';

require('dotenv').config();

const app = express();

const APP_PORT = process.env['APP_PORT'] || "3000";

async function bootstrap() {
	console.time('Restart');

	app.use(appRouter);

	app.listen(APP_PORT, () => {
		console.clear();
		console.timeEnd('Restart')
	});
}
bootstrap();
