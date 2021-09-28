import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import colors from 'colors';
import { notFound, errorhandler } from './middlewares/errorMiddleware.js';
import clientRoutes from './routes/clientRoutes.js';
import cors from 'cors';

dotenv.config();

connectDb();

const app = express();

app.use(cors());
app.options('*', cors());
app.use(express.json());

app.use('/api/clients', clientRoutes);

app.use(notFound);
app.use(errorhandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {});
