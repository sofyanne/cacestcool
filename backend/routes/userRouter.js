const express = require("express");

const userRouter = express.Router();


userRouter.get("/", (req, res, next) => {
    res.json({
        title: "Les auteurs"
    })
});

module.exports = userRouter;