const Joi = require("joi");
const noteSchema = require("../validators/note.validator");
const Note = require("../models/note.model");

exports.create = async (req, res) => {
  // Validar los datos
  const { error } = noteSchema.validate(req.body);
  if (error) {
    return res.status(400).send({ message: error.details[0].message });
  }

  // Crear una nueva nota
  const note = {
    title: req.body.title,
    description: req.body.description,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const data = await Note.create(note);
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({ message: error.message || "Error occurred while creating the note" });
  }
};

exports.findAll = async (req, res) => {
  try {
    console.log("Retrieving notes");
    const notes = await Note.findAll();
    console.log("All notes:", JSON.stringify(notes, null, 2));
    res.status(201).send(notes);
  }
  catch (error) { res.status(500).send({ message: error.message || "Error occurred while retrieving notes" }); }
};

// ... otras funciones CRUD (findAll, findOne, update, delete)
