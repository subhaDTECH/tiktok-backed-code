import express from "express";
import mongoose from "mongoose";
import titokVideos from "./dbModel.js";
const app=express()
const port=process.env.PORT || 4000;
const dburl=""

//app congig
//db conn


mongoose.connect(process.env.MONGODB_URI || dburl,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false
}).then((result)=>console.log("conn successfull")).catch((e)=>{
    console.log(e)
})

//middle wares
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>{
    res.status(200).send("hiii")
})
app.post('/v1/posts/',(req,res)=>{
    const dbData=req.body;
    titokVideos.create(dbData,(error,data)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(201).send(data)
        }
    })
})

app.get('/v1/posts/',(req,res)=>{
  
    titokVideos.find((error,data)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(201).send(data)
        }
    })
})
//middd

//router

//listner
app.listen(port,()=>{
    console.log(`server run on port ${port}`)
})