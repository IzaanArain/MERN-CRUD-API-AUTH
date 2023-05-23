

//@desc Get all todos
//@route Get /api/todos
//@access public
const getAllTodo=(req, res) => {
    res.status(200).json({ message: "Get all todos" });
  }

//@desc Post todo
//@route post /api/todos/
//@access public
const createTodo=(req, res) => {
    console.log(`the request body is :`,req.body)
    const {name,email,age}=req.body
    if(!name || !email || !age){
        throw new Error("All field are mandatory")
    }
    res.status(200).json({ message: req.body });
  }

//@desc Get todo
//@route Get /api/todos/:id
//@access public
const getTodo=(req, res) => {
    res.status(200).json({ message: `get todo for ${req.params.id}`});
  }

//@desc Put todo
//@route Put /api/todos/:id
//@access public
const updateTodo=(req, res) => {
    res.status(200).json({ message: `update todo for ${req.params.id}`});
  }
//@desc delete todo
//@route delet /api/todos/:id
//@access public
const deleteTodo=(req, res) => {
    res.status(200).json({ message: `delete todo for ${req.params.id}`});
  }

  module.exports={
    getAllTodo,
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo}