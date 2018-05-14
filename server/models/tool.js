var mongoose = require("mongoose");

var toolSchema = new mongoose.Schema({
	name: {type: String, required: true},
	toolImage: {type: String, required: true},
	cantidad: {type: Number, required: true, default: 0},
	created_at: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("Tool", toolSchema);