const express = require("express");
const summarizeController = require("../controllers/summarizeController")
const auth = require("../middlewares/auth")
const router = express.Router();

router
    .route("/")
    .post(auth,summarizeController.summarizeMessage)

module.exports = router;