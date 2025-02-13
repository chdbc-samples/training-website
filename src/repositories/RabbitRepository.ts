import { injectable } from 'inversify';
import { Rabbit, IRabbit } from '../models/rabbit';

@injectable()
export class RabbitRepository {
    async findAll(): Promise<IRabbit[]> {
        return Rabbit.find();
    }

    async findById(id: string): Promise<IRabbit | null> {
        return Rabbit.findById(id);
    }

    async create(rabbitData: Partial<IRabbit>): Promise<IRabbit> {
        const rabbit = new Rabbit(rabbitData);
        return rabbit.save();
    }

    async delete(id: string): Promise<IRabbit | null> {
        return Rabbit.findByIdAndDelete(id);
    }
}