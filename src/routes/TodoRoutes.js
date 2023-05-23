const express = require("express");
const {getAllTodo,createTodo,getTodo,updateTodo,deleteTodo}=require("../controller/TodoControllers")
const router = express.Router();

router.route("/")
.get(getAllTodo)
.post(createTodo);

router.route("/:id")
.get(getTodo)
.put(updateTodo)
.delete(deleteTodo)

//examples
// router.route("/:id").delete(deleteTodo);
// router.route("/:id").get((req, res) => {
//     res.status(200).json({ message: `get todo for ${req.params.id}`});
//   });

module.exports = router;
