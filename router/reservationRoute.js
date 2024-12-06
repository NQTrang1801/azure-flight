import express from 'express';
import { reservationController } from '../controllers/reservationController.js';
import { authMiddleware, hasPermission } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get('/511320884/revenue-report-month-year', authMiddleware, hasPermission, reservationController.revenueReportByMonthYear);

router.get('/511320884/revenue-report-year', authMiddleware, hasPermission, reservationController.revenueReportByYear);

export default router;