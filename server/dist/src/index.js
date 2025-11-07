"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const searchRoutes_1 = __importDefault(require("./routes/searchRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const teamRoutes_1 = __importDefault(require("./routes/teamRoutes"));
//Routes Import
// configurations
dotenv_1.default.config();
const app = (0, express_1.default)(); // this means  we give all the express rolls for the app then we can treat the app like the server
app.use(express_1.default.json()); // enable the server to read JSON request body  comes from the client side
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)()); // this is use for api security case
app.use(helmet_1.default.crossOriginResourcePolicy({ policy: "cross-origin" })); // this cross-origin lets images   and another things to be loaded across domains.
app.use((0, morgan_1.default)("common"));
app.use(body_parser_1.default.json()); // this is used for handle the incoming request data  from the client side ti the backend
app.use(body_parser_1.default.urlencoded({ extended: false })); // this one is used to access the incoming form request  data from the client side
// ROUTES
app.get('/', (req, res) => {
    res.send('This is home route');
});
app.use('/projects', projectRoutes_1.default);
app.use('/tasks', taskRoutes_1.default);
app.use('/search', searchRoutes_1.default);
app.use('/users', userRoutes_1.default);
app.use('/teams', teamRoutes_1.default);
// server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
