const errorMaker = require("http-errors");

// 404 error handler

const notFoundHandler = (req, res, next) => {
  next(errorMaker(404, "Your requested url not found"));
};

// default error handler

const errorHandler = (err, req, res, next) => {
  res.locals.err =
    process.env.NODE_ENV === "developement" ? err : { message: err.message };

  res.status(err.status || 500);

  if (res.locals.html) {
    res.render("error", {
      title: "Error Page",
    });
  } else {
    res.json({
      error: err.message,
    });
  }
};

module.exports = { notFoundHandler, errorHandler };
