import express from 'express';
import { requestReservationController } from '../controllers/requestReservationController.js';
import { authMiddleware, hasPermission } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Đặt vé chuyến bay
router.post('/booking', requestReservationController.createRequestReservation);

// Xem danh sách request trên từng chuyến bay
router.get('/580320946/request/:flight_id', authMiddleware, hasPermission, requestReservationController.getRequestsByFlight);

router.get('/580320946/request-all', authMiddleware, hasPermission, requestReservationController.getAllRequests);

// Cập nhật request
router.put('/:request_id', requestReservationController.updateRequestReservation);

// Hủy request
router.patch('/:request_id/cancel', authMiddleware, requestReservationController.cancelRequestReservation);

router.patch('/580457946/:request_id/success', authMiddleware, hasPermission,requestReservationController.requestSuccess);

export default router;
