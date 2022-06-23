const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('Type', {
      id_Type: { 
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
      }
    },  { timestamps: false } 
    );
};