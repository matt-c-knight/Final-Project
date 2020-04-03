const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Contact
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findByUserId: function(req,res) {
    console.log('req.params.userId', req.params.userId)
    db.Contact
      .find({'user': req.params.userId})
      .then(dbModel => {
        console.log('mongo query', dbModel)

        res.json(dbModel);
      })
      .catch(err => console.log("Test",err));

  },
  findById: function(req, res) {
    db.Contact
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
 
  create: function(req, res) {
    db.Contact
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log('err create contact', err);
        res.status(422).json(err)
      });
    
  },
  update: function(req, res) {
    db.Contact
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Contact
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};