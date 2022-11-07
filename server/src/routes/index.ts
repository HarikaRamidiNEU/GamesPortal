import authRouter from './auth/auth-router';
import { Express } from 'express'

import swaggerUI from 'swagger-ui-express';
import swaggerDoc from './swagger.json';

const routes = (app: Express) => {
    // Signup Routes
    app.use('/', authRouter);

    // Setting up swagger
    setupSwagger(app);

}

const setupSwagger = (app: Express) => {
    app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDoc))
    app.get('*', (req, res) => {
        res.redirect('/swagger');
    });
}

export default routes;
