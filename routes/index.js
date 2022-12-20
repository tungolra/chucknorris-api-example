var express = require("express");
var router = express.Router();
const jokesAPICtrl = require("../controllers/api/jokes");

/* GET home page. */
router.get("/", jokesAPICtrl.index);
router.get("/category", jokesAPICtrl.getJokeforCategory);

module.exports = router;
