import express from "express";
import { flightController } from "../controllers/flightController.js";
import { authMiddleware, hasPermission } from "../middlewares/authMiddleware.js";

const router = express.Router();

// Route for creating a new flight (only accessible by admin)
router.post("/511454641/create", authMiddleware, hasPermission, flightController.createFlight);

// Route for getting all flights
router.get("/all", flightController.getAllFlights);

// Route for getting a flight by ID
router.get("/:id", flightController.getFlightById);

// Route for updating seat_count a flight by ID (only accessible by admin)
router.put("/511246641/:flight_id/seats/:seat_id", authMiddleware, hasPermission, flightController.updateSeatCountById);

// Route for updating a flight by ID (only accessible by admin)
router.put("/511246641/:id", authMiddleware, hasPermission, flightController.updateFlight);

// Route for deleting a flight by ID (only accessible by admin)
router.delete("/511627641/:id", authMiddleware, hasPermission, flightController.deleteFlight);

export default router;