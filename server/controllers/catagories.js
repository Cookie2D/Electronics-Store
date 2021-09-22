const fs = require("fs");
const path = require("path");

exports.getCategories = function (req, res) {
    fs.readFile(path.join(__dirname, "../db/categories.json"), "utf8", (err, data) => {
        if (err) {
            res.status(500).send({message: "error loading file on server"})
        } else {
            res.status(200).send(data);
        }
    })
};

