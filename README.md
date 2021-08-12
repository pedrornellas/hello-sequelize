npm install sequelize-cli -g
npm install sequelize@5.21 mysql2

.sequelizerc <<<
const path = require('path');

module.exports = {
	config: path.resolve('./database/config', 'config.js'),
	'models-paths': path.resolve('./database/models'),
	'seeders-path': path.resolve('./database/seeders'),
	'migrations-path': path.resolve('./database/migrations'),
}

sequelize init

set correct values in /database/config/config.js

change the config.js to module.exports the object

define models

module.exports = (sequelize, DataTypes) => sequelize.define('xxx', {
  yyy: { type: DataTypes.STRING, allowNull: false },
});

const db = require("./database/models");
const { Op } = require('sequelize');
  
const alunosDesc = await db.Aluno.findAll({ order: [['nome', 'desc']], limit: 3, offset: 1 });
console.log(alunosDesc);
