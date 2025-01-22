import express from "express";
import {
  createExperience,
  deleteExperience,
  getAllUsers,
  getExperiences,
  getUserById,
  modifyExperience,
  modifyUser,
} from "../controllers/queries.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", modifyUser);
router.get("/:id/experiences", getExperiences);
router.post("/:id/experiences", createExperience);
router.put("/:id/experiences/:id", modifyExperience);
router.delete("/:id/experiences/:id", deleteExperience);

export { router };
