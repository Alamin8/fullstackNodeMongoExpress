
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const path = require('path')

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);


// Routes
app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/productRouter'))
app.use('/api', require('./routes/productUpload'))




//connect to mongodb
const URI = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(`${URI}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};


connectDB();



if(process.env.NODE_ENV === 'production'){
  // if(process.env.NODE_ENV === 'development'){
  app.use(express.static('client/build'))
  app.get('*', (req, res)=> {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});