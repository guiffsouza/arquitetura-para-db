import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { router } from "./routers/index.js";
import { MongoDB } from "./services/mongodb.js";

MongoDB.conectar();

const app = express();
router(app);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
