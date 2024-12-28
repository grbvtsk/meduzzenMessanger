const express = require("express");
const messagesController = require('../controllers/messagesController')
const auth = require("../middlewares/auth")
const router = express.Router();

router
    .route("/")
    .get(auth,messagesController.getAllMessages)
    .post(auth,messagesController.postMessage)
router.route("/:id")
    .delete(auth,messagesController.deleteMessage)
    .patch(auth,messagesController.updateMessage)

module.exports = router;
