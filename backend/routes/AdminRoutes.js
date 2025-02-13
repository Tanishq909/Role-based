import express from "express";
import { deletUser, Getuser } from "../controllers/Admin.js";
import isAdmin from "../middlewares/verifyToken.js";


const AdminRoutes = express.Router()

AdminRoutes.get('/getuser', isAdmin, Getuser); 
AdminRoutes.post('/delete/:id', isAdmin, deletUser);


export default AdminRoutes;