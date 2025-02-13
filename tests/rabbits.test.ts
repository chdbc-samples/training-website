import 'reflect-metadata';
import chai from 'chai';
import chaiHttp from 'chai-http';
import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import app from '../src/server';
import { Rabbit } from '../src/models/rabbit';
import { container } from '../src/config/container';
import { TYPES } from '../src/types/types';
import { IDatabase } from '../src/interfaces/IDatabase';
import type { IConfig } from '../src/config/container';

const { expect } = chai;
chai.use(chaiHttp);

describe('Rabbits API', () => {
    let mongoServer: MongoMemoryServer;
    const database = container.get<IDatabase>(TYPES.IDatabase);

    before(async () => {       
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await database.connect(mongoUri);
    });

    after(async () => {
        await database.disconnect();
        await mongoServer.stop();
    });

    beforeEach(async () => {
        await Rabbit.deleteMany({});
    });

    describe('POST /api/rabbits', () => {
        it('should create a new rabbit', (done) => {
            const rabbit = {
                name: 'Bugs',
                age: 2,
                height: 30,
                weight: 2.5,
                gender: 'male' as const,
                description: 'Grey rabbit'
            };

            chai.request(app)
                .post('/api/rabbits')
                .send(rabbit)
                .end((err, res) => {
                    expect(res).to.have.status(201);
                    expect(res.body).to.have.property('name', rabbit.name);
                    expect(res.body).to.have.property('age', rabbit.age);
                    expect(res.body).to.have.property('height', rabbit.height);
                    expect(res.body).to.have.property('weight', rabbit.weight);
                    expect(res.body).to.have.property('gender', rabbit.gender);
                    done();
                });
        });
    });

    describe('GET /api/rabbits', () => {
        it('should get all rabbits', async () => {
            const testRabbit = new Rabbit({
                name: 'Roger',
                age: 3,
                height: 35,
                weight: 3.2,
                gender: 'male',
                description: 'White rabbit'
            });
            await testRabbit.save();

            const res = await chai.request(app).get('/api/rabbits');
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body.length).to.equal(1);
            expect(res.body[0]).to.have.property('name', 'Roger');
            expect(res.body[0]).to.have.property('gender', 'male');
        });
    });

    describe('GET /api/rabbits/:id', () => {
        it('should get a specific rabbit by id', async () => {
            const testRabbit = new Rabbit({
                name: 'Peter',
                age: 1,
                height: 25,
                weight: 1.8,
                gender: 'male',
                description: 'Brown rabbit'
            });
            const savedRabbit = await testRabbit.save();

            const res = await chai.request(app)
                .get(`/api/rabbits/${savedRabbit._id}`);
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('name', 'Peter');
            expect(res.body).to.have.property('height', 25);
            expect(res.body).to.have.property('gender', 'male');
        });

        it('should return 404 for non-existent rabbit', async () => {
            const res = await chai.request(app)
                .get('/api/rabbits/654321654321654321654321');
            expect(res).to.have.status(404);
        });
    });

    describe('DELETE /api/rabbits/:id', () => {
        it('should delete a rabbit', async () => {
            const testRabbit = new Rabbit({
                name: 'Thumper',
                age: 2,
                height: 28,
                weight: 2.1,
                gender: 'female',
                description: 'Black rabbit'
            });
            const savedRabbit = await testRabbit.save();

            const res = await chai.request(app)
                .delete(`/api/rabbits/${savedRabbit._id}`);
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('message', 'Rabbit removed');

            const findRabbit = await Rabbit.findById(savedRabbit._id);
            expect(findRabbit).to.be.null;
        });
    });
});