'use strict';

const Foodlist = require('./databases/schema');

function show(req, res) {
    Foodlist.find((err, results) => {
        if (err) res.send(err);
        else res.json(results);
    });
}

function save(req, res) {
    // console.log(req.body);
    
    new Foodlist(req.body).save().then((student) => {
        res.status(200).send(student);      
    }).catch((err) => res.status(418).send('unable to process'));

}

module.exports = { save, show };
