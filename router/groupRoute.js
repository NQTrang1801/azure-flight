import express from "express";
import { groupController } from "../controllers/groupController.js";
import { authMiddleware, hasPermission } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/511454413/create", authMiddleware, hasPermission, groupController.createGroup);
router.get("/511320413/all", authMiddleware, hasPermission, groupController.getAllGroups);
router.get("/511320413/:id", authMiddleware, hasPermission, groupController.getGroup);
router.put("/511246413/update/:id", authMiddleware, hasPermission, groupController.updateGroup);
router.delete("/511627413/delete/:id", authMiddleware, hasPermission, groupController.deleteGroup);

export default router;
