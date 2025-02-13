import { Router, Request, Response } from 'express';
import { container } from '../config/container';
import { RabbitRepository } from '../repositories/RabbitRepository';

const router = Router();
const rabbitRepository = container.get(RabbitRepository);

/**
 * @swagger
 * components:
 *   schemas:
 *     Rabbit:
 *       type: object
 *       required:
 *         - name
 *         - age
 *         - height
 *         - weight
 *         - gender
 *       properties:
 *         name:
 *           type: string
 *           description: The name of the rabbit
 *         age:
 *           type: number
 *           description: Age in years
 *         height:
 *           type: number
 *           description: Height in centimeters
 *         weight:
 *           type: number
 *           description: Weight in kilograms
 *         gender:
 *           type: string
 *           enum: [male, female]
 *           description: Gender of the rabbit
 *         description:
 *           type: string
 *           description: Optional description of the rabbit
 */

/**
 * @swagger
 * /api/rabbits:
 *   get:
 *     summary: Get all rabbits
 *     responses:
 *       200:
 *         description: List of all rabbits
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Rabbit'
 */
router.get('/', async (_req: Request, res: Response) => {
    try {
        const rabbits = await rabbitRepository.findAll();
        res.json(rabbits);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(500).json({ message: errorMessage });
    }
});

/**
 * @swagger
 * /api/rabbits/{id}:
 *   get:
 *     summary: Get a rabbit by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The rabbit ID
 *     responses:
 *       200:
 *         description: A rabbit object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rabbit'
 *       404:
 *         description: Rabbit not found
 */
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

/**
 * @swagger
 * /api/rabbits:
 *   post:
 *     summary: Create a new rabbit
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rabbit'
 *     responses:
 *       201:
 *         description: Created rabbit object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rabbit'
 */
router.post('/', async (req: Request, res: Response) => {
    try {
        const newRabbit = await rabbitRepository.create(req.body);
        res.status(201).json(newRabbit);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        res.status(400).json({ message: errorMessage });
    }
});

/**
 * @swagger
 * /api/rabbits/{id}:
 *   delete:
 *     summary: Delete a rabbit
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The rabbit ID
 *     responses:
 *       200:
 *         description: Successful deletion message
 *       404:
 *         description: Rabbit not found
 */
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