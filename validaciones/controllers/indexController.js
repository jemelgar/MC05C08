const { validationResult } = require("express-validator");

const controlador = {
  login: (req, res) => {
    //true
    res.render("index", { title: "validaciones" });
    //más código
  },
  validate: (req, res) => {
    let errors = validationResult(req);
    console.log(errors.array());

    if (errors.isEmpty()) {
      //Que pasa si no hay errores
      let userInfo = req.body;

      res.render("index", { userInfo });
    } else {
      //Qué pasa si hay errores
      let oldInfo = req.body;

      res.render("index", { errors: errors.array(), oldInfo });
      console.log(errors);
    }
  },
};
module.exports = controlador;
