import express from 'express'
import mongoose from "mongoose"
import dotenv from 'dotenv';
import Fmsroute from "./routh/FMSrecoredRought.js"
import cors from "cors"

dotenv.config();
const app = express()
app.use(cors())

const port = process.env.PORT
app.use(express.json())
app.use("/Fms", Fmsroute)
app.listen(port, () => console.log(` app listening on port ${port}!`))
const dburl = process.env.DB_url
mongoose.connect(dburl).then(() => {
  console.log("monggodb connected successfully")
}).catch((err) => {
  console.log(err.message, "database not conected")
})
