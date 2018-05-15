var mongoose = require("mongoose");
var Tool = require("./models/tool");

function deleteDB() {
	Tool.remove({})
	.exec()
	.then(removeTools => console.log("All tools remove"))
	.catch(err => console.log(err))
}

module.exports = deleteDB;