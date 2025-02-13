const express = require('express');
const router = express.Router();
const Rabbit = require('../models/rabbit');

// Get all rabbits
router.get('/', async (req, res) => {
    try {
        const rabbits = await Rabbit.find();
        res.json(rabbits);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get specific rabbit
router.get('/:id', async (req, res) => {
    try {
        const rabbit = await Rabbit.findById(req.params.id);
        if (rabbit) {
            res.json(rabbit);
        } else {
            res.status(404).json({ message: 'Rabbit not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add new rabbit
router.post('/', async (req, res) => {
    const rabbit = new Rabbit({
        name: req.body.name,
        age: req.body.age,
        height: req.body.height,
        weight: req.body.weight,
        gender: req.body.gender,
        description: req.body.description
    });

    try {
        const newRabbit = await rabbit.save();
        res.status(201).json(newRabbit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete rabbit
router.delete('/:id', async (req, res) => {
    try {
        const rabbit = await Rabbit.findByIdAndDelete(req.params.id);
        if (rabbit) {
            res.json({ message: 'Rabbit removed' });
        } else {
            res.status(404).json({ message: 'Rabbit not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;