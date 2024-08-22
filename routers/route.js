import { Router } from "express";
import { UserController } from "../controllers/user.controller.js";

const route=Router();

route.post('/addschool',UserController.addSchoolController);
route.get('/listschools',UserController.listSchoolController)



export default route

