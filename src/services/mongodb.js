import BancoDeDados from "./Banco.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export class MongoDB extends BancoDeDados {
  constructor(model) {
    super(mongoose, model);
  }

  static conectar() {
    mongoose.connect(process.env.MONGODB_URL);
    const db = mongoose.connection;

    db.on("error", (erro) => {
      console.log(erro);
    });

    db.once("open", () => {
      console.log("Conectado ao banco de dados mongoose");
    });
    return db;
  }

  async listar() {
    const dados = await this.model.find();
    return dados;
  }

  criar(personagem) {
    const novoPersonagem = new this.model({
      nome: personagem.nome,
      idade: personagem.idade,
      bibiografia: personagem.bibiografia,
    });
    novoPersonagem.save();
  }
}
