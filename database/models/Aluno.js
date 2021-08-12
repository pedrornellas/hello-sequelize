module.exports = (sequelize, DataTypes) => sequelize.define('Aluno', {
  nome: { type: DataTypes.STRING, allowNull: false },
  sobrenome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  ano_matricula: { type: DataTypes.INTEGER, allowNull: false }
});
