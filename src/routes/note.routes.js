const express = require("express");
const notes = require("../controllers/note.controller");

const router = express.Router();

router.post("/", notes.create);
// router.get("/", notes.findAll);
// router.get("/:id", notes.findOne);
// router.put("/:id", notes.update);
// router.delete("/:id", notes.delete);

module.exports = router;
