export const swaggerSpec = {
    openapi: '3.0.0',
    info: {
        title: 'Rabbit Training API',
        version: '1.0.0',
        description: 'API documentation for the Rabbit Training Website',
    },
    servers: [
        {
            url: 'http://localhost:5000',
            description: 'Development server',
        },
    ],
    paths: {
        '/api/rabbits': {
            get: {
                summary: 'Get all rabbits',
                responses: {
                    '200': {
                        description: 'List of all rabbits',
                        content: {
                            'application/json': {
                                schema: {
                                    type: 'array',
                                    items: { $ref: '#/components/schemas/Rabbit' }
                                }
                            }
                        }
                    }
                }
            },
            post: {
                summary: 'Create a new rabbit',
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: { $ref: '#/components/schemas/Rabbit' }
                        }
                    }
                },
                responses: {
                    '201': {
                        description: 'Created rabbit object',
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Rabbit' }
                            }
                        }
                    }
                }
            }
        },
        '/api/rabbits/{id}': {
            get: {
                summary: 'Get a rabbit by ID',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'The rabbit ID'
                    }
                ],
                responses: {
                    '200': {
                        description: 'A rabbit object',
                        content: {
                            'application/json': {
                                schema: { $ref: '#/components/schemas/Rabbit' }
                            }
                        }
                    },
                    '404': { description: 'Rabbit not found' }
                }
            },
            delete: {
                summary: 'Delete a rabbit',
                parameters: [
                    {
                        in: 'path',
                        name: 'id',
                        required: true,
                        schema: { type: 'string' },
                        description: 'The rabbit ID'
                    }
                ],
                responses: {
                    '200': { description: 'Successful deletion message' },
                    '404': { description: 'Rabbit not found' }
                }
            }
        }
    },
    components: {
        schemas: {
            Rabbit: {
                type: 'object',
                required: ['name', 'age', 'height', 'weight', 'gender'],
                properties: {
                    name: {
                        type: 'string',
                        description: 'The name of the rabbit'
                    },
                    age: {
                        type: 'number',
                        description: 'Age in years'
                    },
                    height: {
                        type: 'number',
                        description: 'Height in centimeters'
                    },
                    weight: {
                        type: 'number',
                        description: 'Weight in kilograms'
                    },
                    gender: {
                        type: 'string',
                        enum: ['male', 'female'],
                        description: 'Gender of the rabbit'
                    },
                    description: {
                        type: 'string',
                        description: 'Optional description of the rabbit'
                    }
                }
            }
        }
    }
};