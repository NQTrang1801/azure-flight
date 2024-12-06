import express from "express";
import { functionalityController } from "../controllers/functionalityController.js";
import { authMiddleware, hasPermission } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/511320617/all", authMiddleware, hasPermission, functionalityController.getAllFunctions);
router.get("/511320617/all-by-group", authMiddleware, hasPermission, functionalityController.getGroupedFunctions);

export default router;
