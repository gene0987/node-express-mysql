const personService = require("../service/PersonService");

const getAll = (req, res) => {
  console.log("retrieving all data");
  personService
    .getAll(req, res)
    .then((results) => res.send(results))
    .catch((err) => console.log(err));
};

const getById = (req, res) => {
  personService
    .getById(req, res)
    .then((results) => res.send(results))
    .catch((err) => console.log(err));
};

const update = (req, res) => {
  personService
    .update(req, res)
    .then((results) => res.send(results))
    .catch((err) => console.log(err));
};

const deleteById = (req, res) => {
  personService
    .delete(req, res)
    .then((results) => res.send(results))
    .catch((err) => console.log(err));
};

const create = (req, res) => {
  personService
    .create(req, res)
    .then((results) => res.send(results))
    .catch((err) => console.log(err));
};

const insertDummy = (req, res) => {
  personService.insertDummy();
};

module.exports = { getById, getAll, update, deleteById, create, insertDummy };
