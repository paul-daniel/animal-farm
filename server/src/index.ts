import express from 'express';
import cors from 'cors';

import { Animal, AnimalObject } from './Animal';

const generateAnimals = (amount : number) => {
    let i = 0;
    const animals : AnimalObject[] = [];
    while (i < amount) {
        const animal = new Animal()
        animals.push(animal.toString());
        i++;
    }

    return animals;
}

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('go to /api route to use the server.')
})

app.get('/api', (req : express.Request, res: express.Response) => {
    try {
        const numberOfAnimals = Number(req.query.amount) || 50;
        const animal = generateAnimals(numberOfAnimals);
        res.status(200).json(animal);
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`)
    }
})

app.listen(3000, () => {
    console.log('Server is running on port localhost:3000');
})
