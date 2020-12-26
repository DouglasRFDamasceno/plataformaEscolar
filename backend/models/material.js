'use strict';
const {
  Model, ForeignKeyConstraintError
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Material extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Material.belongsTo(models.Teacher, {as: 'teachers', foreignKey: 'teacherId'});
    }
  };
  Material.init({
    teacherId: DataTypes.INTEGER,
    materialName: DataTypes.STRING,
    document: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Material',
  });
  return Material;
};
