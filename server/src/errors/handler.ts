import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    console.error('********** [ Internal Error ] **********');
    console.error(`${error}`);
    console.error('****************************************');

    return response.status(500).json({ message: 'Internal server error 🐞.' });
};

export default errorHandler;
