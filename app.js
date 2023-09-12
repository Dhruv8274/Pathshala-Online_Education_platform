const express= require("express");
const collection = require("./mongo")
const cors = require("cors")
const app =  express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",cors(),(req,res)=>{

})

app.post("/",async(req,res)=>{
    const{email}=req.body
    try{
        const check=await collection.findOne({email:email})
        if(check){
        res.json("exist")
        }
        else{
            res.json("Email does not found")
        }
    
    }
    catch(e){
        res.json("notexist")
    }
})



app.post("/signup",async(req,res)=>{
    const{email,password}=req.body
    const data={
        email:email,
        password:password
    }
    try{
        const check=await collection.findOne({email:email})
        if(check){
        res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    
    }
    catch(e){
        res.json("notexist")
    }
})
app.listen(8000,()=>{
    console.log("port connected")
})