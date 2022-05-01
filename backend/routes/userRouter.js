const express = require("express");
const userController = require("../controllers/UserController");
const auth = require("../middleware/auth");

const userRouter = express.Router();


userRouter.get("/", auth,(req, res, next) => {
    res.status(200).json({
        title: "Espace membre"
    });
});


userRouter.post("/signup", userController.signupUser);
userRouter.post("/signin", userController.signinUser);

userRouter.put("/", auth, userController.updateUser);

module.exports = userRouter;