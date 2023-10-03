const express = require("express");
const router = express.Router();
const limiter = require("../middleware/limiter");
const usersCtrl = require("../controllers/usersController");

router.post("/login", limiter, usersCtrl.login);

module.exports = router;
