import express from 'express'
import bodyParser from 'body-parser';
import cors from 'cors';
// imports for mongo db
import mongoose from 'mongoose';
import * as dotenv from 'dotenv'; //a package that connects to .env

//connecting to mongodb
dotenv.config();
const config = { mongoURI: process.env.MONGO_URI as string };

async function connect() {
    try {
        await mongoose.connect(config.mongoURI)
        console.log("connected to mongoDB")
    } catch (error) {
        console.error(error);
    }
}

connect();

// the non mongoDB backend bits
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.get("/api", (req, res) => {
    res.json([{ name: "userOne"}, { name: "userTwo"}, { name: "userThree" }])
})

app.listen(port, () => {console.log(`listening on port: ${port}`)})