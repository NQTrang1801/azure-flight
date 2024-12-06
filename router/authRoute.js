import express from 'express';
import { userController } from '../controllers/userController.js';
import { authMiddleware, hasPermission } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post("/register", userController.createUser);
router.post("/login", userController.loginUSER);
router.post("/admin-login", userController.loginADMIN);
router.post("/administrator-login", userController.loginADMINISTRATOR);

router.patch("/password", authMiddleware, userController.updatePassword);
router.put("/edit-user", authMiddleware, userController.updatedUser);

router.put("/511246447/block-user/:id", authMiddleware, hasPermission, userController.blockUser); //admin-put-user
router.put("/511246447/unblock-user/:id", authMiddleware, hasPermission, userController.unblockUser);
router.patch("/999457447/update-group/:id", authMiddleware, hasPermission, userController.updateGroupUser);

router.get("/refresh", userController.handleRefreshToken);
router.get("/logout", userController.logout);
router.get("/all-users", userController.getAllUsers);
router.get("/:user_id/tickets", userController.getTicketsByUserId);

router.get("/511320447/admin/all-users", authMiddleware, hasPermission, userController.getAllUsersWithAdmin);
router.get("/511320447/info/:id", authMiddleware, hasPermission, userController.getUserWithAdmin);

export default router;
