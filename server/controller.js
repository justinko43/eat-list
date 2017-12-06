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

function deleteList(req, res) {
    Foodlist.findOneAndRemove({name: req.body.name}, (err) => {
        if (!err) res.status(200).send('yay it deleted');
        else res.status(418).send('error it did not delete');
    });
}

module.exports = { save, show, deleteList };
