'use strict';

const Foodlist = require('./databases/schema');

function show(req, res) {
    Foodlist.find((err, results) => {
        if (err) res.send(err);
        else res.json(results);
    });
}

function save(req, res) {

}

module.exports = { save, show };
