const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const noteRoutes = require("./routes/note.routes");


// aca basicamente creas una app que te da express, y le metes decorator para que pueda hacer mas cosas.

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));

app.use("/api/notes", noteRoutes);

module.exports = app;
