const express = require("express");
const personService = require("./service/PersonService");
const personRouter = require("./routes/PersonRouter");

const app = express();

app.listen(3002);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/test", (req, res) => {
  console.log("Server is running");
  personService.checkConnection();
  res.send("<p>It Works!</p>");
});

// person routes
app.use("/person", personRouter);
