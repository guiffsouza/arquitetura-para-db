import { Personagem } from "../model/Personagem.js";
import { MongoDB } from "../services/mongodb.js";
const banco = new MongoDB(Personagem);

const PersonagemController = {
  listar: async (req, res, next) => {
    try {
      const personagem = await banco.listar();
      return res.status(200).send(personagem);
    } catch (error) {
      next(error);
    }
  },
  criar: (req, res, next) => {
    try {
      const { nome, idade, bibiografia } = req.body;
      const personagem = { nome, idade, bibiografia };
      banco.criar(personagem);
      return res
        .status(201)
        .send({ message: "Personagem criado com sucesso." });
    } catch (error) {
      next(error);
    }
  },
};

export default PersonagemController;
