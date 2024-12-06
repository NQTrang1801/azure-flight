import express from 'express';
import { ruleController } from '../controllers/ruleController.js';
import { authMiddleware, hasPermission } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post('/511454340/add-update-rule', authMiddleware, hasPermission, ruleController.addOrUpdateRule);
router.delete('/511627340/delete/:id', authMiddleware, hasPermission, ruleController.deleteRule);
router.get('/511320340/all', authMiddleware, hasPermission, ruleController.getAllRules);
router.get('/511320340/:id', authMiddleware, hasPermission, ruleController.getRuleById);

export default router;
