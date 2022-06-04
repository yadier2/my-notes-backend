const express = require("express");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createNoteSchema,
  getNoteSchema,
  updateNoteSchema,
  deleteNoteSchema,
} = require("../schemas/note.schemas");
const NotesService = require("../services/note.service");
const router = express.Router();

const service = new NotesService();
router.get("/", async (req, res, next) => {
  try {
    const notes = await service.find();
    res.send(notes);
  } catch (error) {
    next(error);
  }
});
router.get(
  "/:id",
  validatorHandler(getNoteSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const note = await service.findOne(id);
      res.json(note);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/",
  validatorHandler(createNoteSchema, "body"),
  async (req, res, next) => {
    const body = req.body;
    try {
      const newNote = await service.create(body);
      res.status(201).json({
        message: "Created note",
        data: newNote,
      });
    } catch (error) {
      next(error);
    }
  }
);
router.patch(
  "/:id",
  validatorHandler(getNoteSchema, "params"),
  validatorHandler(updateNoteSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const note = await service.update(id, body);

      res.json({
        message: "Updated note",
        data: note,
      });
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:id",
  validatorHandler(deleteNoteSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json({
        message: "Deleted note",
        id: rta,
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
