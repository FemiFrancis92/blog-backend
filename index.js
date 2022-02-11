const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
const authRoute = require("./src/routes/auth");
const userRoute = require("./src/routes/users");
const postRoute = require("./src/routes/posts");
//const categorysRoute = require("./routes/categories");
//const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(cors());

require('dotenv').config();
app.use(express.json());

// DB Connection
const uri = proccess.env.MONGO_URL;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>{
      console.log("connected to MONGODB")})
  .catch((err) => console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
// app.use("/api/categories", categorysRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running");
});
