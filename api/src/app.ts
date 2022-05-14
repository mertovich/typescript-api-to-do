import express, { Request, Response } from "express";
import cors from 'cors'
import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });
import Routes  from "./routes/routes";


const app = express();
app.use(cors());
app.use('/api',Routes);
const port = process.env.PORT || 3001;


app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));