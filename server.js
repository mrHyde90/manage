const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser"); 
const http = require("http");
const toolRoute = require("./server/routes/apiTool");
const Tool = require("./server/models/tool");

//base de datos
const url = "mongodb://localhost/administrador";
mongoose.connect( process.env.MONGODB_URI || url);

//get the front directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

//extraer datos del formulario
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//CROSS ORIGIN RESOURCES
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

//Seeding the database
//seed();

//ROUTES
app.use("/", toolRoute);

app.get("*", (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

//handling errors
app.use((req, res, next) => {
  const error = new Error("Not found hermano");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});


//creating the ports
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));