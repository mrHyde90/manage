var express = require("express");
var router = express.Router();
var Tool = require("../models/tool");

//INDEX
router.get("/", (req, res, next) => {
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
});

//SHOW
router.get("/:id", (req, res, next) => {
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
});

//CREATE
router.post("/", (req, res, next) => {
	var newTool = new Tool({
		name: req.body.name,
		toolImage: req.body.toolImage,
		cantidad: req.body.cantidad
	});

	newTool.save()
	.then(result => res.status(201).json({message: "new tool created"}))
	.catch(err => res.status(500).json({error: err}))
});

//UPDATE
router.patch("/:id", (req, res, next) => {
	const id = req.params.id;
	Tool.update({_id: id}, {$set: {name: req.body.name, cantidad: req.body.cantidad, toolImage: req.body.toolImage}})
	.exec()
	.then(result => res.status(200).json({message: "tool updated!"}))
	.catch(err => res.status(500).json({error: err}))
});

//DELETE
router.delete("/:id", (req, res, next) => {
	const id = req.params.id;
	Tool.remove({_id: id})
	.exec()
	.then(result => res.status(200).json({message: "tool deleted"}))
	.catch(err => res.status(500).json({error: err}))
});

module.exports = router;