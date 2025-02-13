import { Schema, model } from 'mongoose';

interface IRabbit {
    name: string;
    age: number;
    height: number;
    weight: number;
    gender: 'male' | 'female';
    description?: string;
    dateAdded: Date;
}

const rabbitSchema = new Schema<IRabbit>({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    description: String,
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

export const Rabbit = model<IRabbit>('Rabbit', rabbitSchema);
export type { IRabbit };