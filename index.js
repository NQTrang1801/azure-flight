import express from 'express';
import dbConnect from './config/dbConnect.js';
import { notFound, errorHandler } from './middlewares/errorHandler.js';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';

import authRoute from './router/authRoute.js';
import ruleRoute from './router/ruleRoute.js';
import airportRoute from './router/airportRoute.js';
import flightRoute from './router/flightRoute.js';
import permissionRoute from './router/permissionRoute.js';
import groupRoute from './router/groupRoute.js';
import requestReservationRoute from './router/requestReservationRoute.js';
import reservationRoute from './router/reservationRoute.js';
import functionalityRoute from './router/functionalityRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
dbConnect();

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/permission', permissionRoute);
app.use('/api/group', groupRoute);
app.use('/api/user', authRoute);
app.use('/api/rule', ruleRoute);
app.use('/api/airport', airportRoute);
app.use('/api/flight', flightRoute);
app.use('/api/request-reservations', requestReservationRoute);
app.use('/api/reservations', reservationRoute);
app.use('/api/functionalities/', functionalityRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at PORT ${PORT}`);
});
