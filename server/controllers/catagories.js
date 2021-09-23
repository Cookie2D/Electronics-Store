const fs = require("fs");
const path = require("path");
const  url = require('url')

exports.getCategories = function (req, res) {
    console.log(req.params, ' -req.params')
    let urlRequest = url.parse(req.url, true);
    console.log(urlRequest.query.item, ' - urlRequest.query');

    fs.readFile(path.join(__dirname, "../db/categories.json"), "utf8", (err, data) => {

        if (err) {
            res.status(500).send({message: "error loading file on server"})
        } else {
            let db = JSON.parse(data)
            if(urlRequest.query.item < db.length) {
                let newDb = db.slice(0, urlRequest.query.item);
                res.status(200).send(JSON.stringify(newDb));
            } else {
                res.status(200).send(data);
            }

        }
    })
};

