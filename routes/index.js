const express = require("express");

const notesRouter = require("./note.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1/", router);
  router.use(
    "/notes",
    notesRouter
  );
}

module.exports = routerApi;
