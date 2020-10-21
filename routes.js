const express = require("express");
const routes = express.Router();
const {
  totalUsers,
  addUser,
  totalUserById,
  userDeleteById,
  userUpdateById,
} = require("./controllers/index");

routes.get("/total/users", totalUsers);
routes.get("/get/user/:Id", totalUserById);
routes.post("/add", addUser);
routes.post("/user/delete/:Id", userDeleteById);
routes.put("/user/update/:Id", userUpdateById);

module.exports = routes;
