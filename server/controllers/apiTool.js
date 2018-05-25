const mongoose = require("mongoose");
var Tool = require("../models/tool");

//INDEX
exports.tools_get_all = (req, res, next) => {
	Tool.find({})
	.exec()
	.then(foundTools => {
		const newTools = foundTools.map(foundTool => {
			return {
				_id: foundTool._id,
				name: foundTool.name,
				toolImage: foundTool.toolImage,
				cantidad: foundTool.cantidad,
				created_at: foundTool.created_at
			}
		});
		res.status(200).json(newTools);
	})
	.catch(err => res.status(500).json({error: err}))
}

//SHOW
exports.tools_get_tool = (req, res, next) => {
	const id = req.params.id;
	Tool.findById(id)
	.exec()
	.then(foundTool => {
		res.status(200).json({
			_id: foundTool._id,
			name: foundTool.name,
			toolImage: foundTool.toolImage,
			cantidad: foundTool.cantidad,
			created_at: foundTool.created_at
		});
	})
	.catch(err => res.status(500).json({error: err}))
}

//CREATE
exports.tools_create_tool = (req, res, next) => {
	var newTool = new Tool({
		name: req.body.name,
		toolImage: req.body.toolImage,
		cantidad: req.body.cantidad
	});

	newTool.save()
	.then(result => res.status(201).json({message: "new tool created"}))
	.catch(err => res.status(500).json({error: err}))
}

//UPDATE
exports.tools_update_tool = (req, res, next) => {
	const id = req.params.id;
	Tool.update({_id: id}, {$set: {name: req.body.name, cantidad: req.body.cantidad, toolImage: req.body.toolImage}})
	.exec()
	.then(result => res.status(200).json({message: "tool updated!"}))
	.catch(err => res.status(500).json({error: err}))
}

//DELETE
exports.tools_delete_tool = (req, res, next) => {
	const id = req.params.id;
	Tool.remove({_id: id})
	.exec()
	.then(result => res.status(200).json({message: "tool deleted"}))
	.catch(err => res.status(500).json({error: err}))
}
