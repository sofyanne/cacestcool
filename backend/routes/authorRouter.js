const express = require("express");

const authorRouter = express.Router();


authorRouter.get("/", (req, res, next) => {
    res.json({
        title: "Les auteurs"
    })
});

module.exports = authorRouter;