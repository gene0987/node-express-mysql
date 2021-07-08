const personService = require("../service/PersonService");

// try using await/async instead of promises
// to tidy up the code

// no promise
const getAll = (req, res) => {
  try {
    console.log("retrieving all data");
    const result = personService.getAll();
    console.log("controller layer: ", result);
    res.status(200);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500);
    res.send(err);
  }
};

// with promise
// const getAll = (req, res) => {
//   console.log("retrieving all data");
//   personService
//     .getAll(req, res)
//     .then((results) => {
//       console.log("controller layer: ", results);
//       res.send(results);
//     })
//     .catch((err) => console.log(err));
// };

const getById = (req, res) => {
  personService
    .getById(req, res)
    .then((results) => {
      res.status(200);
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send(err);
    });
};

const update = (req, res) => {
  personService
    .update(req, res)
    .then((results) => {
      res.status(200);
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send(err);
    });
};

const deleteById = (req, res) => {
  personService
    .delete(req, res)
    .then((results) => {
      res.status(200);
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send(err);
    });
};

const create = (req, res) => {
  personService
    .create(req, res)
    .then((results) => {
      res.status(200);
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.send(err);
    });
};

const insertDummy = (req, res) => {
  personService.insertDummy();
};

module.exports = { getById, getAll, update, deleteById, create, insertDummy };
