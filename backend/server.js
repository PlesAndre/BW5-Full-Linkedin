import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import multer from "multer";

import { router as userRouter } from "./routes/routes.js";
import { modifyUser } from "./controllers/queries.js";

const server = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Cartella dove salvare i file
  },
  filename: (req, file, cb) => {
    // Crea un nome file unico
    // const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

server.use(express.json());
server.use(cors());
connectDB();

const port = 3001;

server.get("/", (req, res) => {
  res.send("Linkedin backend");
});

server.use("/api/users", userRouter);

server.post("/api/upload", upload.single("image"), modifyUser);

server.listen(port, () => {
  console.log(`Server in funzione sulla porta ${port}`);
});
