const express = require("express");

const app = express();
app.use(express.json());

const port = 8081;

const todolist = ["learn", "apply things", "succeed"];

//http://localhost:8081/todos

app.get("/todos", (req, res) => {
  res.status(200).send(todolist);
});

app.post("/todos",(req,res)=>{
  let newToDoItem=req.body.name;
  todolist.push(newToDoItem);
  res.status(200).send("message:task added successfully");
});

app.delete("/todos",(req,res)=>{
  const deleteThisItem=req.body.name;

  todolist.find((ele,index)=>{
    if(ele===deleteThisItem){
      todolist.splice(index,1)
    }
  })
  res.status(20).send({message: `deleted ${req.body.name} successfully`});
});


app.listen(port, () => {
  console.log(`Nodejs server started running on port ${port}`);
});
