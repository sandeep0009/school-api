import express from "express"
import { connection } from "./database/dbconnection.js"
import route from "./routers/route.js"

const app=express()


const port="3000"

app.use(express.json());


app.use('/api',route);


connection.connect(function(err){
    if(err){
        console.log("error connecting")
        process.exit(1);
        return;
    }
    console.log("connected to database")
})

app.listen(port,()=>{
    console.log("connected to port")
})