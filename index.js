import express  from "express";
import cors from 'cors'
import bodyParser from "body-parser"
import mongoose from "mongoose";
import pageRoute from "./routes/pages.js"
import adminRoute from "./routes/admin.js"
import userRoute from "./routes/user.js"
import itemRoute from "./routes/item.js"
import orderRoute from "./routes/order.js"
const app = express()

const port = 5000

app.use(express.static("./views"))
app.use(express.json())
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())


mongoose.connect("mongodb://localhost:27017/",{
    dbName:"grocery"
}).then(()=>{
    console.log('db is connected')
}).catch(err=>{
    console.log(err)
})

app.use('/',pageRoute)
app.use('/admin',adminRoute)
app.use('/users',userRoute)
app.use('/items',itemRoute)
app.use('/orders',orderRoute)


app.listen(port,()=>console.log(`server at ${port}`))