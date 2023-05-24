const asyncHandler = require("express-async-handler");
const Todo = require("../models/TodoModel");

//@desc Get all todos
//@route Get /api/todos
//@access private
const getAllTodo = asyncHandler(async (req, res) => {
  const todos = await Todo.find({ user_id: req.user.id });
  res.status(200).json(todos);
});

//@desc Post todo
//@route post /api/todos/
//@access private
const createTodo = asyncHandler(async (req, res) => {
  console.log(`the request body is :`, req.body);
  const {
    fname,
    email,
    age,
    lname,
    activityType,
    contact,
    city,
    country,
    date,
    duration,
    description,
  } = req.body;
  if (!fname || !email) {
    throw new Error("name & email field are mandatory");
  }
  const todo = await Todo.create({
    fname: fname,
    lname: lname,
    email: email,
    age: age,
    activityType:activityType,
    contact:contact,
    city:city,
    country:country,
    date:date,
    duration:duration,
    description:description,
    user_id: req.user.id,
  });
  // const todo=await Todo.create(req.body)
  res.status(201).json(todo);
});

//@desc Get todo
//@route Get /api/todos/:id
//@access private
const getTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw Error("Todo not found");
  }
  res.status(200).json(todo);
});

//@desc Put todo
//@route Put /api/todos/:id
//@access private
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw Error("Todo not found");
  }

  if(todo.user_id.toString()!==req.user.id){
    res.status(403);
    throw new Error("user des not have permission to update other user Todos")
  }

  const updateTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateTodo);
});

//@desc delete todo
//@route delet /api/todos/:id
//@access private
const deleteTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo) {
    res.status(404);
    throw Error("Todo not found");
  }

  if(todo.user_id.toString()!==req.user.id){
    res.status(403);
    throw new Error("user des not have permission to update other user Todos")
  }
  
  await Todo.findByIdAndDelete(req.params.id);
  res.status(200).json(todo);
});

module.exports = {
  getAllTodo,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
};
