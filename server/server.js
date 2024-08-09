const express = require('express');
require('dotenv').config(); 
const { User, EcoConnect, EcoFund, Volunteer, Ecocorp, EcoCalc, EcoVision,Comment,News  } = require('./config/database');
const cors = require('cors');
const app = express();
const volunteerrouter=require('./routes/volunteer.route');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Node API app is running on localhost:${PORT}`);
});

app.use('/volunteer',volunteerrouter);
// app.post("/create", async (req, res) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json(user); 
//   } catch (error) {
//     console.error("Error creating user:", error.message);
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = app;
