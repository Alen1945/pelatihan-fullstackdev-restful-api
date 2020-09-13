//1. Basic Routing (Routes)

const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = 4000;

app.use(morgan("tiny"));
app.get("/", (req, res, next) => {
  res.send("berhasil dijalankan");
});

app.get("/data", (req, res, next) => {
  res.json({
    name: "alen",
    age: 22,
  });
});
// app.get("/article", (req, res) => {
//   res.send("ini artikel");
// });
// app.get("/article/first-article", (req, res) => {
//   res.send("ini artikel pertama");
// });
// app.get("/article/second-article", (req, res) => {
//   res.send("ini artikel kedua");
// });

//Router
const ArticleRouter = require("./src/routes/article");
app.use("/article", ArticleRouter);

app.get("/handle/:id", (req, res, next) => {
  if (req.params.id < 4) {
    next();
  } else {
    throw new Error("salah");
  }
});
app.get("/handle/:id", (req, res) => {
  res.send("id valid");
});

// handling error
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      msg: error.message || "Internal Server error",
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
