import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import postRoutes from './routes/posts.js'
import dotenv from 'dotenv'
dotenv.config();
const app = express();


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

app.use('/posts', postRoutes);




//  ---------------------------------------- Database------------------------


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));
// mongoose.set('useFindAndModify', false);