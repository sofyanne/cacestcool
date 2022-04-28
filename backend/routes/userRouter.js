const express = require("express");
const userController = require("../controllers/UserController");

const userRouter = express.Router();


userRouter.get("/", (req, res, next) => {
    res.json({
        title: "Les auteurs"
    })
});

userRouter.post("/", userController.createUser);

module.exports = userRouter;