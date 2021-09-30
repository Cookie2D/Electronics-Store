const fs = require("fs");
const path = require("path");

exports.getCategories = function (req, res) {
  fs.readFile(path.join(__dirname, `../db/goods.json`), "utf8", (err, data) => {
    if (err) {
      console.log('get')
      res.status(500).send({message: "error loading file on server"})
    } else {
      let param = req.params.categories;
      let rez = JSON.parse(data).filter(i => i.type === param);
      res.status(200).send(rez);
    }
  })
};

exports.getGoods = function (req, res) {
  fs.readFile(path.join(__dirname, `../db/goods.json`), "utf8", (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send({message: "error loading file on server"})
    } else {
      let id = req.params.id;
      let ans = JSON.parse(data).filter(e => e.id === +id);
      res.status(200).send(ans);
    }
  })
}


exports.getItem = function (req, res) {
  fs.readFile(path.join(__dirname, `../db/goods.json`), "utf8", (err, data) => {
    if (err) {
      console.log(err)
      res.status(500).send({message: "error loading file on server"})
    } else {
      let search = new RegExp(req.query.name.toLowerCase(), 'i');
      let rez = JSON.parse(data).filter(e => e.name.match(search) !== null);
      res.status(200).send(rez);
    }
  })
}