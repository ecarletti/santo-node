const express = require("express");
const notes = require("../controllers/note.controller");

const router = express.Router();

router.post("/", notes.create);
router.get("/", notes.findAll);
// router.get("/:id", notes.findOne);
// router.put("/:id", notes.update);
// router.delete("/:id", notes.delete);

router.get("/prueba", (req, res) => {
    console.log('En /api1');
    res.json({ message: "Hello from server1!" });
  });

module.exports = router;
