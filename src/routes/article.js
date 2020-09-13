const RouterArticle = require("express").Router();
const { GetAllArticle, GetDetailArticle } = require("../controllers/article");

RouterArticle.get("/", GetAllArticle);
RouterArticle.get("/:id", GetDetailArticle);

module.exports = RouterArticle;
