const { Model, DataTypes, Sequelize } = require("sequelize");

const NOTE_TABLE = "notes";

const NoteSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.TEXT,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
};

class Note extends Model {
  
  static config(sequelize) {
    return {
      sequelize,
      tableName: NOTE_TABLE,
      modelName: "Note",
      timestamps: true,
    };
  }
}

module.exports = { NOTE_TABLE, Note, NoteSchema };
