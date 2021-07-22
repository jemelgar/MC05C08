const { validationResult } = require("express-validator");
const changeColor = (value) => {
  document.body.style.backgroundColor = value;
};

const controlador = {
  login: (req, res) => {
    //true
    res.render("index", { title: "validaciones" });
    //más código
  },
  validate: (req, res) => {
    let errors = validationResult(req);
    // res.send(errors);
    // console.log(errors.param["email"]);
    if (errors.isEmpty()) {
      //Que pasa si no hay errores
      let userInfo = req.body;
      // res.send(userInfo);
      req.session.user = userInfo;
      res.render("index", { userInfo });
      //
    } else {
      //Qué pasa si hay errores
      let oldInfo = req.body;
      res.render("index", { errors: errors.array(), oldInfo });
    }
  },
  profile: (req, res) => {
    let usuario = req.session.user;
    res.render("profile", { usuario });
    // res.send(req.session.user);
  },
};
module.exports = controlador;
