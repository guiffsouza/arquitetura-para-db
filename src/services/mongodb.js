import BancoDeDados from "./Banco.js";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

export class MongoDB extends BancoDeDados {
  constructor() {
    super(mongoose);
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

  schema(dados) {
    const schema = new mongoose.Schema(dados);
    return mongoose.model("Personagem", schema);
  }

  async listar(model) {
    const dados = await mongoose.models[model].find();
    return dados;
  }

  criar(Personagem, personagem) {
    const novoPersonagem = new Personagem({
      nome: personagem.nome,
      idade: personagem.idade,
      bibiografia: personagem.bibiografia,
    });
    novoPersonagem.save();
  }
}
