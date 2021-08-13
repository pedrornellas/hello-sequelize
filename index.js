const db = require("./database/models");
const { Op } = require('sequelize');

const { log } = console;
const line = () => log("".padEnd(120, "-"));

const run = async () => {
  const print = (input) => {
    const rows = [input].flat().map((row) => row.dataValues);
    log(rows);
  };

  log("Todos alunos");
  line();
  const alunos = await db.Aluno.findAll();
  print(alunos);

  log("X");
  line();
  const X = await db.Aluno.findOne({ where: { nome: "X" } });
  print(X);

  log("Aluno.id = 1");
  line();
  const aluno1 = await db.Aluno.findByPk(1);
  print(aluno1);

  log("Alunos que começam com a letra X");
  line();
  const alunosX = await db.Aluno.findAll({ where: { nome: {[Op.like]: 'X%' } }});
  print(alunosX);

  
  log("Todos alunos desc");
  line();
  const alunosDesc = await db.Aluno.findAll({ order: [['nome', 'desc']], limit: 3, offset: 1 });
  print(alunosDesc);
};

run();
