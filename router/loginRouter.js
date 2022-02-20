const express = require("express");
const { getLogin } = require("../controller/loginController");

const router = express.Router();
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

router.get("/", decorateHtmlResponse("Login Page"), getLogin);

module.exports = router;
