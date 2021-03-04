// required modules
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

// create express app
const app = express();

// set up ejs folder
app.set('view engine', 'ejs');

// set up public static folders
app.use(express.static("public"));

// set up bodyParser use
app.use(bodyParser.urlencoded({extended: true}));

// connect to mongoose db
mongoose.connect("mongodb+srv://admin-matt:Bailey123@cluster0.dcczm.mongodb.net/baileyDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Mongoose schema for emails
const emailSchema = new mongoose.Schema({
  email: String
});

// Mongoose model for emails
const Email = mongoose.model("Email", emailSchema);

// Create get request for home route
app.get("/", function(req, res) {
  res.render("home");
});

app.get("/pricing", function(req, res) {
  res.render("pricing");
});

app.get("/signup", function(req, res) {
  res.render("signup");
});

app.get("/aboutus", function(req, res) {
  res.render("aboutus");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.post("/signup", function(req, res) {
  const newUserEmail = req.body.userEmail;
// creating a new mongoose document in the Email collection
  const newEmail = new Email({
    email: newUserEmail
  });

  newEmail.save();
  res.render("success");
})


// Listen for port to start server
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
