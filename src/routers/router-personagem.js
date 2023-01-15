import { Router } from "express";
import PersonagemController from "../controllers/personagen-controller.js";

const routerPersonagem = Router();

routerPersonagem
  .get("/personagens/listar", PersonagemController.listar)
  .post("/personagens/criar", PersonagemController.criar);

export default routerPersonagem;
