const personService = require("../service/PersonService");

// try using await/async instead of promises
// to tidy up the code

// no promise
// const getAll = (req, res) => {
//   try {
//     console.log("retrieving all data");
//     const result = personService.getAll();
//     console.log("controller layer: ", result);
//     res.status(200);
//     res.send(result);
//   } catch (err) {
//     console.log(err);
//     res.status(500);
//     res.send(err);
//   }
// };

// with promise
// const getAll = (req, res) => {
//   console.log("retrieving all data");
//   personService
//     .getAll(req, res)
//     .then((results) => {
//       console.log("controller layer: ", results);
//       res.send(results);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500);
//       res.send(err);
//     });
// };

// CONTROLLER
// async/await
const getAll = async (req, res) => {
  try {
    console.log("retrieving all data");
    const result = await personService.getAll(req, res);
    console.log("controller layer:", result);

    res.status(200);
    res.send(result);
  } catch (err) {
    console.log("error:", err);

    res.status(500);
    res.send(err);
  }
};

const getById = async (req, res) => {
  try {
    const result = await personService.getById(req, res);

    res.status(200);
    res.send(result);
  } catch (err) {
    console.log("error:", err);

    res.status(500);
    res.send(err);
  }
};

const update = async (req, res) => {
  try {
    const result = await personService.update(req, res);

    res.status(200);
    res.send(result);
  } catch (err) {
    console.log("error:", err);

    res.status(500);
    res.send(err);
  }
};

const deleteById = async (req, res) => {
  try {
    const result = await personService.delete(req, res);

    res.status(200);
    res.send(result);
  } catch (err) {
    console.log("error:", err);

    res.status(500);
    res.send(err);
  }
};

const create = async (req, res) => {
  try {
    const result = await personService.create(req, res);
    res.status(200);
    res.send(result);
  } catch (err) {
    console.log("error:", err);

    res.status(500);
    res.send(err);
  }
};

const insertDummy = (req, res) => {
  personService.insertDummy();
};

module.exports = { getById, getAll, update, deleteById, create, insertDummy };
