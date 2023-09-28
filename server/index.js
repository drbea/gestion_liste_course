import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from "cors"
import authRoute from "./routes/user.js"
import shopRouter from "./routes/shop.js"
import articleRouter from "./routes/article.js"
const app = express()
dotenv.config()

const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGODB_URI
app.use(express.json())
app.use(cors())

/* app.get('/', (req, res) => {
    res.send('Hello World!')}) */
app.use("/auth", authRoute);
app.use("/shop", shopRouter);
app.use("/article", articleRouter);


mongoose.connect(MONGODB_URI,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).catch(err => { console.log(err) })

app.listen(PORT, () => {
    console.log(`Server running on  http://localhost:${PORT}`)})
