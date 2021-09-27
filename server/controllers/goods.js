const fs = require("fs");
const path = require("path");

exports.getCategories = function (req, res) {
  fs.readFile(path.join(__dirname, `../db/${req.params.categories}.json`), "utf8", (err, data) => {
    if (err) {
      console.log('get')
      res.status(500).send({message: "error loading file on server"})
    } else {
      res.status(200).send(data);
    }
  })
};

exports.getGoods = function (req, res) {
  fs.readFile(path.join(__dirname, `../db/${req.params.categories}.json`), "utf8", (err, data) => {
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