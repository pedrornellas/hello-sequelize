const db = require('./database/models');

const { log } = console;

const run = async () => {
  const print = input => {
    const rows = [input].flat().map(row => row.dataValues);
    log(rows);
  }

  log('Todos alunos');
  log(''.padEnd(120, '-'));
  const alunos = await db.Aluno.findAll();
  print(alunos);

  log('Rodrigo');
  log(''.padEnd(120, '-'));
  const rodrigo = await db.Aluno.findOne({ where: { nome: 'Rodrigo' }});
  print(rodrigo);


  log('Aluno.id = 1');
  log(''.padEnd(120, '-'));
  const aluno1 = await db.Aluno.findByPk(1);
  print(aluno1);
}

run();