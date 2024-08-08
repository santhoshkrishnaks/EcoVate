const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const {Webhook}=require('svix');
const bodyParser=require('body-parser');
const user=require('./model/model.user.js');
dotenv.config();
const cors=require('cors');
const app= express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect("mongodb+srv://admin:Ecovate@ecovate.5mgaa.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Ecovate").then(() => {
    console.log("Connected to mongoose");
    app.listen(5000, () => {
      console.log("NodeApi app is running on localhost 5000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
app.get('/',(req,res)=>{
  res.send("Hello World");
});
app.post(
  '/api/webhooks',
  bodyParser.raw({ type: 'application/json' }),
  async function (req, res) {
    try {
      const payloadString = req.body.toString();
      const svixHeaders = req.headers;

      const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET_KEY);
      const evt = wh.verify(payloadString, svixHeaders);

      const { id, ...attributes } = evt.data;

      const eventType = evt.type;

      if (eventType === 'user.created') {
        const firstName = attributes.first_name;
        const lastName = attributes.last_name;
        const email = attributes.email_addresses[0].email_address;
        const profile_img_url = attributes.profile_image_url;
        const username = attributes.username;
        const User = new user({
          email_address: email,
          first_name: firstName,
          last_name: lastName,
          user_name: username,
          profile_img_url: profile_img_url
        });
        await User.save();
        console.log('User is created');
      }

      res.status(200).json({
        success: true,
        message: 'Webhook received',
      });
    } catch (err) {
      console.error(err);
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  }
);