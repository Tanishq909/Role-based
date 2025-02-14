import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieparser from "cookie-parser";
import DbCon from "./utilis/db.js";
import AuthRoutes from "./routes/Auth.js";
import AdminRoutes from "./routes/AdminRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;

//Mongodb
DbCon();

app.use(express.json()); // Parses incoming JSON requests
app.use(express.urlencoded({extended:true})); // Parses incoming requests with urlencoded payloads
app.use(cookieparser()); // Parses incoming cookie requests
app.use(cors({
    credentials: true,
    origin: "https://role-based-ebd13.web.app",
})); // Enables CORS for all routes or token use hoga frontend mai bhi


app.use('/api/auth',AuthRoutes);
app.use('/api/admin',AdminRoutes);


app.get('/',(req,res) => {
    res.send("tanishq");
});

app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`);
});
