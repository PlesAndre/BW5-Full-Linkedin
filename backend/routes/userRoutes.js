import express from "express";
import { getAllUsers } from "../controllers/usersQueries.js";

const router = express.Router();

router.get("/", getAllUsers);

export { router };
