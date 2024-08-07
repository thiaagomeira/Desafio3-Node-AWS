import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import userRoutes from './routes/userRoutes';
import eventRoutes from './routes/eventRoutes';
import authMiddleware from './middlewares/authMiddleware';
import swaggerDocs from './config/swagger';
import swaggerUi from 'swagger-ui-express';
import { Request, Response, NextFunction } from 'express';

dotenv.config();

connectDB();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.use('/api/users', authMiddleware, userRoutes);
app.use('/api/events', authMiddleware, eventRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    statusCode: err.status || 500,
    message: err.message || 'Internal Server Error',
    error: err.error || 'Internal Error',
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
