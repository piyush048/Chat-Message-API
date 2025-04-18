import express, { Application } from 'express';
import dotenv from 'dotenv';
import { connectDB, swaggerSpec, swaggerUi, logger } from './config';
dotenv.config();
import {Authrouter, UserRouter, contactRouter, msgRouter} from './routes';


const app : Application = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/auth', Authrouter);
app.use('/users', UserRouter);
app.use('/contacts', contactRouter);
app.use('/messages', msgRouter);



app.listen(PORT, () => {
    connectDB();
    // console.log(`Server is running on http://localhost:${PORT}`);
    logger.info(`Server is running on http://localhost:${PORT}`);
    logger.info(`Swagger docs at http://localhost:${PORT}/api-docs`);
});