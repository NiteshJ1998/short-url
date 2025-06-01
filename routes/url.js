const express = require("express");
const { handleGenereteNewShortURL } = require("../controllers/url");
const router = express.Router();

router.post("/", handleGenereteNewShortURL);

module.exports = router;
