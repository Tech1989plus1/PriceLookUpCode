const Plu = require('../../db/model/Plu.js');

exports.getPlu = (req, res) => {
  Plu.find((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.deletePlu = (req, res) => {

};

exports.postPlu = (req, res) => {

};

exports.updatePlu = (req, res) => {

};