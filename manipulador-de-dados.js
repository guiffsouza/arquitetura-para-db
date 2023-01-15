const personagem = {
  nome: { type: String, required: true },
  idade: { type: Number, required: false },
  bibiografia: { type: String, required: true },
};

function manipulaDados(dados) {
  let obj = {};

  for (let key in dados) {
    obj[key] = {
      tipoDeDado: dados[key].type,
      valorObrigatorio: dados[key].required,
    };
  }
  return obj;
}

const model = manipulaDados(personagem);
console.log(model);
