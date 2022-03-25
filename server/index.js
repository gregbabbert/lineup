const express = require("express");
const app = express();
const path = require('path')

// logging middleware
const morgan = require("morgan");
app.use(morgan("dev"));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// parsing middleware
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const port = process.env.PORT || 3000; // this can be very useful if you deploy to Heroku!
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
