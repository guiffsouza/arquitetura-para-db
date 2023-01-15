import { MongoDB } from "../services/mongodb.js";
const banco = new MongoDB();
export const Personagem = banco.schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  bibiografia: { type: String, required: true },
});
