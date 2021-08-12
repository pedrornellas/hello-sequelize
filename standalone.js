const mysql = require('mysql2/promise');
const Sequelize = require('sequelize');

const host = 'localhost';
const user = 'root';
const password = '741963';
const database = 'dhschool';
const dialect = 'mysql';

const run = async () => {
  const conn = await mysql.createConnection({host, user, database, password});
  const [rows, fields] = await conn.query('select * from alunos');
  console.log(rows);
}

const run2 = async () => {
  const sequelize = new Sequelize(database, user, password, { host, dialect });
  await sequelize.authenticate();

  const Aluno = sequelize.define('aluno', {
    nome: { type: Sequelize.STRING, allowNull: false },
    sobrenome: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false },
    ano_matricula: { type: Sequelize.INTEGER, allowNull: false }
  });

  const alunos = await Aluno.findAll();
  console.log(alunos.map(aluno => aluno.dataValues));

  await sequelize.close();
}

run2();
