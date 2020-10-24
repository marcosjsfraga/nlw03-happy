import express from 'express';
import path from 'path';
import 'express-async-errors';
import cors from 'cors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(
    cors({
        origin: ['*'],
    }),
);
// Set Express to understand JSON
app.use(express.json());
// Using routes
app.use(routes);
// Using static
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
// Using errors
app.use(errorHandler);

app.listen(3333);
