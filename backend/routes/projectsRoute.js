const express = require("express");
const router = express.Router();

const projectsCtrl = require("../controllers/projectsController");

router.get("/", projectsCtrl.getAllProjects);
router.get("/:id", projectsCtrl.getOneProject);

module.exports = router;
