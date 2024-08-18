import express from "express";
import cors from "cors";
import router from "./routes/payment.routes.js";
const app = express()

app.listen(3000)

console.log('http://localhost:3000')

app.use(cors())
app.use(express.json())
app.use(router)








app.get('/',(req, res)=>{
    res.send('Hola Messi')
})

