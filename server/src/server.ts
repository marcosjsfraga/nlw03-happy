import express from 'express';
import './database/connection';

import routes from './routes';

const app = express();

// Set Express to understand JSON
app.use(express.json());
// Using routes
app.use(routes);

app.listen(3333);
