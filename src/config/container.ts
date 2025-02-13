import 'reflect-metadata';
import { Container } from 'inversify';
import { IDatabase } from '../interfaces/IDatabase';
import { MongoDatabase } from '../database/MongoDatabase';
import { RabbitRepository } from '../repositories/RabbitRepository';
import { TYPES } from '../types/types';
import { NODE_ENV } from './env';

export interface IConfig {
    nodeEnv: string;
}

const container = new Container();

// Bind config
container.bind<IConfig>('Config').toConstantValue({
    nodeEnv: NODE_ENV
});

// Database uses interface so keep Symbol
container.bind<IDatabase>(TYPES.IDatabase).to(MongoDatabase).inSingletonScope();

// Direct binding for concrete RabbitRepository class
container.bind(RabbitRepository).toSelf().inSingletonScope();

export { container };