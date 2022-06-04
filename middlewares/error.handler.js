const { ValidationError } = require("sequelize");
const boom = require("@hapi/boom");

/*Mostrar los errores */
function logErrors(err, req, res, next) {
 // console.error(err);
  next(err);
}

/*Formatear los errores - punto final*/
function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

/*Middleware para error gestionado por Boom */
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}
/*Middleware para error gestionado por sql */
function queryErrorHandler(err, req, res, next) {
  if (err.parent) {
    const { fields, parent } = err;
    res.status(500).json({
      field: fields,
      message: parent.detail,
    });
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if (err instanceof ValidationError) {
    throw boom.conflict(err);
  }
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler, ormErrorHandler };
