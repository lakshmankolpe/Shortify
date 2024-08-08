import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import healthApi from "./controllers/health.js";
import { postLink, getSlugRedirect,getLinks,} from "./controllers/link.js";
import {postSignup,postLogin} from "./controllers/user.js"


const app = express();
app.use(express.json());
app.use(cors());

const connectMongoDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URL);
  if (conn) {
    console.log(`MongoDB Connected✅`);
  }
};
connectMongoDB();

app.get("/health", healthApi);

app.post("/signup",postSignup);
app.post("/login",postLogin)


app.post("/link", postLink);
app.get("/linksbyuser",getLinks);



app.get("/:slug", getSlugRedirect);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
