const express = require("express");
const { list, create, deleteItem, update } = require("../controllers/items.controller");
const { authRequired } = require("../middlewares/auth.middleware");
const router = express.Router();

router.get("/", authRequired, list);
router.post("/", authRequired, create);
router.delete("/:id", authRequired, deleteItem);
router.put("/:id", authRequired, update); 

module.exports = router;
