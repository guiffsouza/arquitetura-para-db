import { Schema, model } from "mongoose";

const schema = new Schema({
  nome: { type: String, required: true },
  idade: { type: Number, required: true },
  bibiografia: { type: String, required: true },
});

export const Personagem = model("Personagem", schema);
