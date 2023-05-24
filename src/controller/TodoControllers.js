const asyncHandler=require("express-async-handler")
const Todo=require("../models/TodoModel")
//@desc Get all todos
//@route Get /api/todos
//@access public
const getAllTodo=asyncHandler(async(req, res) => {
  const todos=await Todo.find()
  res.status(200).json(todos);
})

//@desc Post todo
//@route post /api/todos/
//@access public
const createTodo=asyncHandler(
  async(req, res) => {
    console.log(`the request body is :`,req.body)
    const {fname,email,age,lname}=req.body
    if(!fname || !email){
        throw new Error("name & email field are mandatory")
    }
    const todo=await Todo.create({
      fname:fname,
      lname:lname,
      email:email,
      age:age
    })
    // const todo=await Todo.create(req.body)
    res.status(201).json(todo);
  }
)

//@desc Get todo
//@route Get /api/todos/:id
//@access public
const getTodo=asyncHandler(async(req, res) => {
  res.status(200).json({ message: `get todo for ${req.params.id}`});
})

//@desc Put todo
//@route Put /api/todos/:id
//@access public
const updateTodo=asyncHandler(async(req, res) => {
  res.status(200).json({ message: `update todo for ${req.params.id}`});
})

//@desc delete todo
//@route delet /api/todos/:id
//@access public
const deleteTodo=(async(req, res) => {
  res.status(200).json({ message: `delete todo for ${req.params.id}`});
})

  module.exports={
    getAllTodo,
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo}