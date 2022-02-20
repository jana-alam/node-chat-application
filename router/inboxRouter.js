const express = require("express");
const { getInbox } = require("../controller/inboxController");

const router = express.Router();
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
router.get("/", decorateHtmlResponse("Inbox page"), getInbox);

module.exports = router;
