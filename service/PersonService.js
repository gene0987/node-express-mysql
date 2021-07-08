const dbConn = require("../resource/connection");
const Person = require("../model/Person");

const checkConnection = () => {
  console.log("checking connection");
  try {
    dbConn.connect((err) => {
      if (!err) console.log("connected to db...");
      else console.log(`Error : ${err}`);
    });
  } catch (error) {
    console.log(error);
  }
};

// with promise
const getAll = (req, res) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM person`;

    dbConn.query(query, (err, results) => {
      if (err) {
        reject(err.message);
      } else {
        console.log("service layer:", results);
        resolve(results);
      }
    });
  });
};

// no promise
// const getAll = () => {
//   const query = `SELECT * FROM person`;

//   dbConn.query(query, function (err, results) {
//     if (err) {
//       console.log("error:", err);
//     }
//     console.log("service layer", results);
//     return results;
//   });
// };

const insertDummy = () => {
  const query = "INSERT INTO node_db.person (name, age, dob) VALUES(?, ?, ?)";

  dbConn.query(query, ["Doma", "23", "1-20-9999"], (error, results, fields) => {
    if (error) console.log("error:", error);
    else console.log("inserted dummy data");
  });
};

const getById = (req, res) => {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM person where id = ?";

    dbConn.query(query, req.params.id, (err, results) => {
      if (err) reject(err.message);
      else resolve(results);
    });
  });
};

const update = (req, res) => {
  return new Promise((resolve, reject) => {
    const query =
      "UPDATE node_db.person SET name= ?, age= ?, dob= ? WHERE id= ?;";
    const rawJson = JSON.stringify(req.body);
    const parsedJson = JSON.parse(rawJson);
    const p = new Person(parsedJson);

    dbConn.query(query, [p.name, p.age, p.dob, p.id], (err, results) => {
      if (err) reject(err.message);
      else resolve(results);
    });
  });
};

const deleteById = (req, res) => {
  return new Promise((resolve, reject) => {
    const query = "DELETE FROM node_db WHERE id= ?;";

    dbConn.query(query, req.param.id, (err, results) => {
      if (err) reject(err.message);
      else resolve(results);
    });
  });
};

const create = (req, res) => {
  return new Promise((resolve, reject) => {
    const query = "INSERT INTO node_db.person(name, age, dob)VALUES(?, ?, ?);";
    const rawJson = JSON.stringify(req.body);
    const parsedJson = JSON.parse(rawJson);
    const p = new Person(parsedJson);

    dbConn.query(query, [p.name, p.age, p.dob], (err, results) => {
      if (err) reject(err.message);
      else resolve(results);
    });
  });
};

module.exports = {
  checkConnection,
  getAll,
  insertDummy,
  getById,
  update,
  deleteById,
  create,
};
