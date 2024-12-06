import express from 'express';
import { airportController } from '../controllers/airportController.js';
import { authMiddleware, hasPermission } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Routes for admin
router.post('/511454675/create', authMiddleware, hasPermission, airportController.checkAirportCount, airportController.createAirport);
router.put('/511246675/:id', authMiddleware, hasPermission, airportController.updateAirport);
router.patch('/511457675/:id/status', authMiddleware, hasPermission, airportController.updateAirportStatus);
router.delete('/511627675/:id', authMiddleware, hasPermission, airportController.deleteAirport);

// Routes for user
router.get('/all', airportController.getAllAirports);
router.get('/:id', airportController.getAirportById);

export default router;