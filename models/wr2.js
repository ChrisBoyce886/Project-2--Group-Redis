module.exports = function(sequelize, DataTypes) {
  var WR2 = sequelize.define("wr2", {
    rank: DataTypes.INT,
    name: DataTypes.STRING,
    team: DataTypes.STRING,
    position: DataTypes.STRING,
    Receptions: DataTypes.INT,
    receivingYards: DataTypes.INT,
    receivingTouchdowns: DataTypes.INT,
    yardsPerReception: DataTypes.DECIMAL,
    receptionsPerGame: DataTypes.DECIMAL,
    receivingYardsPerGame: DataTypes.DECIMAL
  });
  return WR2;
};
