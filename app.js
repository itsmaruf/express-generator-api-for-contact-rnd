var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// mongoose config
var mongoose = require("mongoose");
mongoose.set("strictQuery", true);

// get the url
var dbURL = require("./properties").DB_URL;

// connection
mongoose.connect(dbURL);

// check connection
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// importing models
var contactModel = require("./models/contact.model");

// importing routes
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var contactsRouter = require("./routes/contactLists");
var segmentsRouter = require("./routes/segments");
var segmentListRouter = require("./routes/segmentList");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/contacts", contactsRouter);
app.use("/api/v1/segment", segmentsRouter);
app.use("/api/v1/segment/list", segmentListRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
