import { injectable, inject } from 'inversify';
import mongoose from 'mongoose';
import { IDatabase } from '../interfaces/IDatabase';
import type { IConfig } from '../config/container';
import { MONGODB_URI } from '../config/env';

@injectable()
export class MongoDatabase implements IDatabase {
    private _isConnected: boolean = false;

    constructor(
        @inject('Config') private config: IConfig
    ) {}

    async connect(uri?: string): Promise<void> {
        if (this._isConnected) {
            console.log('Using existing database connection');
            return;
        }

        try {
            const mongoUri = uri || MONGODB_URI;
            if (!mongoUri) {
                throw new Error('MongoDB URI is not defined');
            }
            await mongoose.connect(mongoUri);
            this._isConnected = true;
            console.log(`MongoDB Connected: ${mongoose.connection.host} in ${this.config.nodeEnv} mode`);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            console.error(`Error: ${errorMessage}`);
            throw error;
        }
    }

    async disconnect(): Promise<void> {
        if (!this._isConnected) {
            return;
        }
        
        try {
            await mongoose.disconnect();
            this._isConnected = false;
            console.log('MongoDB Disconnected');
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            console.error(`Error disconnecting from MongoDB: ${errorMessage}`);
            throw error;
        }
    }

    isConnected(): boolean {
        return this._isConnected;
    }
}