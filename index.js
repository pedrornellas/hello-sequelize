const db = require('./database/models');

db.Aluno.findAll().then(rows => rows.map(row => row.dataValues)).then(console.log);
