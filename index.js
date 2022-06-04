const express = require("express");
const cors = require("cors");
const routerApi = require("./routes/index");

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require("./middlewares/error.handler");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
const whitelist = [
  "http://localhost:3000",
  "https://blog-atalaya.herokuapp.com",
];

const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("No permitido"));
    }
  },
};

app.use(cors(options));


app.get("/", (req, res) => {
  res.send("Server run");
});
routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log("Server run port " + port);
});