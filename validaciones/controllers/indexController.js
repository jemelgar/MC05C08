const { validationResult } = require("express-validator");
const changeColor = (value) => {
  document.body.style.backgroundColor = value;
};

const controlador = {
  login: (req, res) => {
    if (req.cookies.recordar) {
      req.session.user = userInfo = req.cookies.recordar;

      res.render("index", { title: "validaciones", userInfo });
    } else {
      res.render("index", { title: "validaciones" });
    }
  },
  validate: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      //Que pasa si no hay errores
      let userInfo = req.body;

      req.session.user = userInfo;
      //cookie
      if (req.body.recordar != undefined) {
        res.cookie("recordar", userInfo, { maxAge: 1000 * 60 });
        console.log(req.cookies.recordar);
      }
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
  checarsession: (req, res) => {
    res.send(req.session.user);
  },
};
module.exports = controlador;
