import express from "express";
import { getUsers } from "../controllers/usersController";

const Router = express.Router();

Router.route("/").get(getUsers);

export default Router;
