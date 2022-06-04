const boom = require("@hapi/boom");
const { models } = require("../libs/sequelize");

class NotesService {
  constructor() {}

  async find() {
    const rta = await models.Note.findAll();
    return rta;
  }

  async create(data) {
    const newNote = await models.Note.create(data);
    return newNote;
  }

  async findOne(id) {
    const note = await models.Note.findByPk(id);
    if (!note) {
      throw boom.notFound("No se encontró el elemento");
    }
    return note;
  }
  async update(id, changes) {
    const note = await this.findOne(id);
    const rta = await note.update(changes);
    return rta;
  }

  async delete(id) {
    const note = await this.findOne(id);
    await note.destroy();
    return note.dataValues.id;
  }
}

module.exports = NotesService;
