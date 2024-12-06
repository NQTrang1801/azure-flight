import express from "express";
import { permissionController } from "../controllers/permissionController.js";
import { authMiddleware, hasPermission } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/511454990/create", authMiddleware, hasPermission, permissionController.createMultiplePermissions);
router.get("/511320990/all", authMiddleware, hasPermission, permissionController.getAllPermissions);
router.get("/511000000/:userId/all", authMiddleware, hasPermission, permissionController.getAllPermissionByUserId);
router.get("/511320990/:id", authMiddleware, hasPermission, permissionController.getPermission);
router.put("/511246990/update/:id", authMiddleware, hasPermission, permissionController.updatePermission);
router.delete("/511627990/delete", authMiddleware, hasPermission, permissionController.deletePermission);

export default router;
