const Joi = require("joi");

const id = Joi.number();
const title = Joi.string().min(2);
const description = Joi.string().min(3);

const createNoteSchema = Joi.object({
  title: title.required(),
  description: description.required(),
});

const getNoteSchema = Joi.object({
  id: id.required(),
});

const updateNoteSchema = Joi.object({
  title: title,
  description: description,
});

const deleteNoteSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createNoteSchema,
  getNoteSchema,
  updateNoteSchema,
  deleteNoteSchema,
};
