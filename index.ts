import { Request, Response } from 'express';

const app = require('./app').default;

const port = 3001;

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});