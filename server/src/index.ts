import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import helmet from "helmet"
import morgan from "morgan"
import projectRoutes from "./routes/projectRoutes"

//Routes Import
// configurations
dotenv.config()
const app = express();  // this means  we give all the express rolls for the app then we can treat the app like the server
app.use(express.json());  // enable the server to read JSON request body  comes from the client side
app.use(cors());
app.use(helmet());  // this is use for api security case
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" })); // this cross-origin lets images   and another things to be loaded across domains.
app.use(morgan("common"));
app.use(bodyParser.json());  // this is used for handle the incoming request data  from the client side ti the backend
app.use(bodyParser.urlencoded({ extended: false }));  // this one is used to access the incoming form request  data from the client side

// ROUTES
app.get('/', (req,res)=>{
    res.send('This is home route')
})
app.use('/projects',projectRoutes)

// server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});