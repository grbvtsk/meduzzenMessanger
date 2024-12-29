const express = require("express");
const messagesController = require('../controllers/messagesController')
const auth = require("../middlewares/auth")
const upload = require("../middlewares/multer-config")
const router = express.Router();


router
    .route("/")
    .get(auth,messagesController.getAllMessages)
    .post(auth,upload.array("files", 10),messagesController.postMessage)
router.route("/:id")
    .delete(auth,messagesController.deleteMessage)
    .patch(auth,messagesController.updateMessage)

module.exports = router;
