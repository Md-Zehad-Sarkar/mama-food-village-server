import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import config from './app/config';
import { router } from './app/routes/index.routes';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';
import { apiNotFound } from './app/middleware/api.notFound';
export const port = config.Port || 5000;

export const app: Application = express();

//middleware
app.use(cors());
app.use(express.json()); // parser

//routes
app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.json({
    Server_Running: true,
    Message: 'Mama-Food-Village server are running',
  });
});

//error handler
app.use(globalErrorHandler);
app.use(apiNotFound);
