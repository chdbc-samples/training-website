import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import { container } from './config/container';
import { TYPES } from './types/types';
import { IDatabase } from './interfaces/IDatabase';
import * as config from './config/env';
import type { IConfig } from './config/container';
import { swaggerSpec } from './config/swagger';

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Get database instance from container
const database = container.get<IDatabase>(TYPES.IDatabase);
const appConfig = container.get<IConfig>('Config');

// Routes
import rabbitRoutes from './routes/rabbits';
app.use('/api/rabbits', rabbitRoutes);

database.connect();

const PORT = config.PORT;

// Only listen if the file is run directly (not required as a module)
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} in ${appConfig.nodeEnv} mode`);
        console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
    });
}

export default app;