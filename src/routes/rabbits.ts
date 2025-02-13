import { Router, Request, Response } from 'express';
import { container } from '../config/container';
import { RabbitRepository } from '../repositories/RabbitRepository';

const router = Router();
const rabbitRepository = container.get(RabbitRepository);

router.get('/', async (_req: Request, res: Response) => {
    try {
        const rabbits = await rabbitRepository.findAll();
        res.json(rabbits);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
});

router.get('/:id', async (req: Request, res: Response) => {
    try {
        const rabbit = await rabbitRepository.findById(req.params.id);
        if (rabbit) {
            res.json(rabbit);
        } else {
            res.status(404).json({ message: 'Rabbit not found' });
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
});

router.post('/', async (req: Request, res: Response) => {
    try {
        const newRabbit = await rabbitRepository.create(req.body);
        res.status(201).json(newRabbit);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(400).json({ message: errorMessage });
    }
});

router.delete('/:id', async (req: Request, res: Response) => {
    try {
        const rabbit = await rabbitRepository.delete(req.params.id);
        if (rabbit) {
            res.json({ message: 'Rabbit removed' });
        } else {
            res.status(404).json({ message: 'Rabbit not found' });
        }
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
});

export default router;