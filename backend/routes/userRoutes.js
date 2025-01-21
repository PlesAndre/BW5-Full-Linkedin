import express from "express";
import { getAllUsers, getUserById } from "../controllers/usersQueries.js";

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:id", getUserById);

export { router };
