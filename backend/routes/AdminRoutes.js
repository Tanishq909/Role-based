import express from "express";
import { deleteUser, Getuser } from "../controllers/Admin.js";
import isAdmin from "../middlewares/verifyToken.js";


const AdminRoutes = express.Router()

AdminRoutes.get('/getuser', Getuser); 
AdminRoutes.delete('/delete/:id', isAdmin, deleteUser);


export default AdminRoutes;
