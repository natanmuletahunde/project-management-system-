import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser"
import helmet from "helmet"
import morgan from "morgan"
import projectRoutes from "./routes/projectRoutes"
import taskRoutes from "./routes/taskRoutes"
import searchRoutes from "./routes/searchRoutes"
import useRoutes from "./routes/userRoutes"
import teamRoutes from "./routes/teamRoutes"
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
app.use('/tasks',taskRoutes)
app.use('/search',searchRoutes)
app.use('/users',useRoutes)
app.use('/teams',teamRoutes)
// server
const port = Number(process.env.PORT) || 3000;
app.listen(port,"0.0.0.0", () => {
    console.log(`Server is running on port ${port}`);
});