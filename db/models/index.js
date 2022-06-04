const { Note, NoteSchema } = require("./note.model");

function setupModels(sequelize) {
  Note.init(NoteSchema, Note.config(sequelize));
}

module.exports = setupModels;
