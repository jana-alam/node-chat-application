const express = require("express");
const dotEnv = require("dotenv");
const cookieParser = require("cookie-parser");
const path = require("path");

// internel dependencies
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");
const loginRouter = require("./router/loginRouter");
const usersRouter = require("./router/usersRouter");
const inboxRouter = require("./router/inboxRouter");

dotEnv.config();
const app = express();

// request parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set view engine

app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// set cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// routing setup

app.use("/", loginRouter);
app.use("/users", usersRouter);
app.use("/inbox", inboxRouter);

// error handling
app.use(notFoundHandler);
app.use(errorHandler);

// run the server

app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
