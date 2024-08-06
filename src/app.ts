import express, { Request, Response, NextFunction } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from '../config/swagger';
import userRoutes from './routes/userRoutes';
import eventRoutes from './routes/eventRoutes';

const app = express();

app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500).json({
    statusCode: err.status || 500,
    message: err.message
 || 'Internal Server Error',
    error: err.error || 'Internal Error',
  });
});

export default app;