import express from "express";
import {
  getAllUsers,
  getExperiences,
  getUserById,
} from "../controllers/usersQueries.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.get("/:id/experiences", getExperiences);

export { router };
