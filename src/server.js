const express = require("express");
require("dotenv").config();
const TodoRoutes = require("./routes/TodoRoutes");

const app = express();
app.use(express.json())
app.use("/api/todos", TodoRoutes);


app.get("/api/test/", (req, res) => {
  // res.send(`<h1>Hello World</h1>`)
  // res.send(`Hello World`)
  res.status(200).json({ message: "Hello world" });
});
app.get("/api/test/:id", (req, res) => {
  res.status(200).send(`Hello World ${req.params.id}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/api/test/`);
  console.log(`Server running on port http://localhost:${PORT}/api/todos`);
});
