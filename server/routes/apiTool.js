const express = require("express");
const router = express.Router();

const ToolsController = require("../controllers/apiTool");

//INDEX
router.get("/", ToolsController.tools_get_all)

//SHOW
router.get("/:id", ToolsController.tools_get_tool)

//CREATE
router.post("/", ToolsController.tools_create_tool)

//UPDATE
router.patch(":id", ToolsController.tools_update_tool)

//DELETE
router.delete("/:id", ToolsController.tools_delete_tool)

module.exports = router;