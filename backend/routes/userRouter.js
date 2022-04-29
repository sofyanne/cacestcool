const express = require("express");
const userController = require("../controllers/UserController");

const userRouter = express.Router();


userRouter.get("/", (req, res, next) => {
    res.json({
        title: "Les auteurs"
    })
});

userRouter.post("/signup", userController.signupUser);
userRouter.post("/signin", userController.signinUser);

module.exports = userRouter;