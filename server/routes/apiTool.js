var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
	res.send("Hello world");
});

module.exports = router;