const express = require("express");
const { getUsers } = require("../controller/usersController");

const router = express.Router();
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

router.get("/", decorateHtmlResponse("Users page"), getUsers);
module.exports = router;
