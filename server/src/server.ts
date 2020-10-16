import express from 'express';

const app = express();

// Set Express to understand JSON
app.use(express.json());

app.get('/users', (request, response) => {
    return response.json( { message: 'Server is runnig on port 3333...'} );
});

app.listen(3333);
