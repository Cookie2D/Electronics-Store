const fs = require("fs");
const path = require("path");

exports.getLaptops = function (req, res) {
        fs.readFile(path.join(__dirname, "../db/laptops.json"), "utf8", (err, data) => {
            if (err) {
                res.status(500).send({message: "error loading file on server"})
            } else {
                res.status(200).send(data);
            }
        })
};
exports.getPhones = function (req, res) {
        fs.readFile(path.join(__dirname, "../db/phones.json"), "utf8", (err, data) => {
            if (err) {
                res.status(500).send({message: "error loading file on server"})
            } else {
                res.status(200).send(data);
            }
        })
};
exports.getPrinters = function (req, res) {
        fs.readFile(path.join(__dirname, "../db/printers.json"), "utf8", (err, data) => {
            if (err) {
                res.status(500).send({message: "error loading file on server"})
            } else {
                res.status(200).send(data);
            }
        })
};
exports.getScreens = function (req, res) {
        fs.readFile(path.join(__dirname, "../db/screens.json"), "utf8", (err, data) => {
            if (err) {
                res.status(500).send({message: "error loading file on server"})
            } else {
                res.status(200).send(data);
            }
        })
}