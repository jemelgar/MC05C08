var express = require("express");
var router = express.Router();
const { body } = require("express-validator");
const indexController = require("../controllers/indexController");
/* Validaciones */
const Validaciones = [
  body("nombre").notEmpty().withMessage("Tienes que poner un nombre"),
  body("color").notEmpty().withMessage("Tienes que seleccionar un color"),
  body("email")
    .notEmpty()
    .withMessage("Tienes que poner un email")
    .isEmail()
    .withMessage("El formato debe ser válido"),
  body("edad")
    .optional({ checkFalsy: true })
    .isInt()
    .withMessage("Tienes que poner un número"),
];

/* GET home page. */
router.get("/", indexController.login);
router.post("/", Validaciones, indexController.validate);

module.exports = router;
