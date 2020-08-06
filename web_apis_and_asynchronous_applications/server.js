/* Empty JS object to act as endpoint for all routes */
projectData = {};

// Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require("body-parser");

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require("cors");
app.use(cors());

/* Initializing the main project folder */
app.use(express.static("website"));

const port = 3000; // or =>  8000

const server = app.listen(port, listening);

function listening() {
  console.log("server running");
  console.log(`running on localhost: ${port}`);
}

// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (request, response) {
  response.send("hello world");
});
// Create JS object
const appData = {};

// POST method route
app.post("/", function (request, response) {
  response.send("POST received");
});

const data = [];
app.post("/addMovie", addMovie);
function addMovie(request, response) {
  //   console.log(request.body);
  data.push(request.body);
  console.log(data);
}

app.post("/animal", addAnimal);

function addAnimal(request, response) {
  data.push(request.body);
}
app.post("/add", function (request, response) {
  let data = request.body;
  projectData["intelligence"] = data.intelligence;
  console.log(data);
});

const fakeData = {
  animal: "lion",
  fact: "lions are fun!",
};

app.get("/fakeAnimalData", getFakeData);
function getFakeData(request, response) {
  response.send(fakeData);
}
const animalData = [];

// Respond with JS object when a GET request is made to the homepage
app.get("/all", getData);
function getData(request, response) {
  console.log(animalData);

  // console.log(request);
  response.send(animalData);
}
app.post("/addAnimal", addAnimal);
function addAnimal(req, res) {
  newEntry = {
    animal: req.body.animal,
    facts: req.body.fact,
    fav: req.body.fav,
  };

  animalData.push(newEntry);
  res.send(animalData);
  console.log(animalData);
}
