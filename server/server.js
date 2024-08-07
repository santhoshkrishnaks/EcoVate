const express= require("express");
const mongoose=require("mongoose");
const app= express();

const cors=require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/",(req,res)=>{
  res.send("hello");
})
mongoose.connect("mongodb+srv://admin:Ecovate@ecovate.5mgaa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Ecovate").then(() => {
    console.log("Connected to mongoose");
    app.listen(5000, () => {
      console.log("NodeApi app is running on localhost 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });