import dotenv from 'dotenv';

// Load env vars
dotenv.config();

const getEnvValue = (key: string, defaultValue: string): string => {
    const value = process.env[key];
    if (!value && process.env.NODE_ENV === 'production') {
        console.warn(`Warning: ${key} environment variable not set, using default value`);
    }
    return value || defaultValue;
};

export const NODE_ENV: string = getEnvValue('NODE_ENV', 'development');
export const PORT: number = parseInt(getEnvValue('PORT', '5000'), 10);
export const MONGODB_URI: string = getEnvValue('MONGODB_URI', 'mongodb://localhost:27017/zoo');