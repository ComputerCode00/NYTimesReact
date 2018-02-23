const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const apiRoutes = require("./routes/apiRoutes");

const PORT = process.env.PORT || 3050;

app.use(express.static("client/build"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/api", apiRoutes);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`Site ==> Server now on port ${PORT}!`);
});