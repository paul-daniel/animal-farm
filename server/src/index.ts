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
const animals = generateAnimals(50);

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('/animals route to use the server.')
})

app.get('/animals', (req : express.Request, res: express.Response) => {
    try {
        const q = req.query.q || '';
        const results = animals.filter(
        (animal) => animal.type.toLowerCase().includes((q as string).toLowerCase()) 
        );
        res.send(results);
    } catch (error) {
        res.status(500).send(`Internal server error: ${error}`)
    }
})

app.listen(3000, () => {
    console.log('Server is running on port localhost:3000');
})
