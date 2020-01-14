const Plu = require('../../db/model/Plu.js');

exports.getRecent = (req, res) => {
  Plu.find((err, data) => {
    if(err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
};

exports.getDepartment = (req, res) => {
  const { category } = req.params;
  const department = category.toUpperCase()[0] + category.slice(1);

  Plu.find(req.params, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send({view: department, data: data});
    }
  });
};

exports.postPlu = (req, res) => {

};

exports.updatePlu = (req, res) => {

};