const express = require("express");
const usersController = require("../controllers/usersController")
const auth = require("../middlewares/auth")
const router = express.Router();

router
    .route("/")
    .get(auth,usersController.getAllUsers)


module.exports = router;
