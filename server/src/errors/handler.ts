import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
    if (error instanceof ValidationError) {
        const errors: ValidationErrors = {};

        error.inner.forEach(err => {
            errors[err.path] = err.errors;
        });

        console.error('********** [ Validation Error ] **********');

        return response.status(400).json({ message: 'Validation fails 🐞.', errors });
    }

    console.error('********** [ Internal Error ] **********');
    console.error(error);
    console.error('****************************************');

    return response.status(500).json({ message: 'Internal server error 🐞.' });
};

export default errorHandler;
