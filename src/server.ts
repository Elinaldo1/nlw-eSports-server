import express from 'express';

const app = express();

app.get('/inicio', (req, res) => {
    return res.json([
        {id: 1, name: 'teste1'},
        {id: 2, name: 'teste2'},
        {id: 3, name: 'teste3'},
        {id: 4, name: 'teste4'},
    ])
})

app.listen(3333, () => console.log('Api Nlw online'))