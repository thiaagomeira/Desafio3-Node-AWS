import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Event API',
      version: '1.0.0',
      description: 'API for managing events and users',
    },
    servers: [{ url: 'http://localhost:3001' }],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
