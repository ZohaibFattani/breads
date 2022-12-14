// Dependencies
let express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");

//Configuration
require("dotenv").config();
let PORT = process.env.PORT;
let app = express();

// Mongoose
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongo: ", process.env.MONGO_URI);
  }
);

// Middleware
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

//Routes
app.get("/", (req, res) => {
  res.send("Welcome to an Awesome App about Breads!");
});

// breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

// bakers 
const bakersController = require('./controllers/bakers_controller.js')
app.use('/bakers', bakersController)

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


//Listen
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
