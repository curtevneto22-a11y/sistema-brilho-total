import { Router } from "express";
import userController from "../controllers/userController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import authAdminMiddleware from "../middlewares/authAdminMiddleware.js";

const 