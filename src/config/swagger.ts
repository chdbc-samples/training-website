import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Rabbit Training API',
        version: '1.0.0',
        description: 'API documentation for the Rabbit Training Website',
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Development server',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'], // path to the API docs
};

export const swaggerSpec = swaggerJSDoc(options);